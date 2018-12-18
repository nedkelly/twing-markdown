"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts a `markdown` section of a template to `html`.
 */
const twing_1 = require("twing");
const markdown_1 = require("../node/markdown");
class TwingTokenParserMarkdown extends twing_1.TwingTokenParser {
    parse(token) {
        let lineno = token.getLine();
        let columnno = token.getColumn();
        let stream = this.parser.getStream();
        let value;
        if (stream.test(twing_1.TwingToken.BLOCK_END_TYPE)) {
            value = 'html';
        }
        else {
            let expr = this.parser.getExpressionParser().parseExpression();
            if (expr.getType() !== twing_1.TwingNodeType.EXPRESSION_CONSTANT) {
                throw new twing_1.TwingErrorSyntax('The contents of a markdown tag must be a string.', stream.getCurrent().getLine(), stream.getSourceContext());
            }
            value = expr.getAttribute('value');
        }
        stream.expect(twing_1.TwingToken.BLOCK_END_TYPE);
        let body = this.parser.subparse([this, this.decideBlockEnd], true);
        stream.expect(twing_1.TwingToken.BLOCK_END_TYPE);
        return new markdown_1.TwingNodeMarkdown(value, body, lineno, columnno, this.getTag());
    }
    decideBlockEnd(token) {
        return token.test(twing_1.TwingToken.NAME_TYPE, 'endmarkdown');
    }
    getTag() {
        return 'markdown';
    }
}
exports.TwingTokenParserMarkdown = TwingTokenParserMarkdown;
//# sourceMappingURL=markdown.js.map