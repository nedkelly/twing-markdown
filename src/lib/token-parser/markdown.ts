/**
 * Converts a `markdown` section of a template to `html`.
 */
import { TwingTokenParser, TwingToken, TwingNode, TwingNodeType, TwingErrorSyntax } from "twing";
import { TwingNodeMarkdown } from "../node/markdown";

export class TwingTokenParserMarkdown extends TwingTokenParser {
  parse(token: TwingToken): TwingNode {
    let lineno = token.getLine();
    let columnno = token.getColumn();
    let stream = this.parser.getStream();
    let value: string;

    if (stream.test(TwingToken.BLOCK_END_TYPE)) {
      value = 'html';
    }
    else {
      let expr = this.parser.getExpressionParser().parseExpression();

      if (expr.getType() !== TwingNodeType.EXPRESSION_CONSTANT) {
        throw new TwingErrorSyntax('The contents of a markdown tag must be a string.', stream.getCurrent().getLine(), stream.getSourceContext());
      }

      value = expr.getAttribute('value');
    }

    stream.expect(TwingToken.BLOCK_END_TYPE);

    let body = this.parser.subparse([this, this.decideBlockEnd], true);

    stream.expect(TwingToken.BLOCK_END_TYPE);

    return new TwingNodeMarkdown(value, body, lineno, columnno, this.getTag());
  }

  decideBlockEnd(token: TwingToken) {
    return token.test(TwingToken.NAME_TYPE, 'endmarkdown');
  }

  getTag() {
    return 'markdown';
  }
}
