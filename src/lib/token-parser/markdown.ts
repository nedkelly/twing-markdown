/**
 * Converts a `markdown` section of a template to `html`.
 */
import { TwingTokenParser, TwingToken, TwingNode } from "twing";
import { TwingNodeMarkdown } from "../node/markdown";

export class TwingTokenParserMarkdown extends TwingTokenParser {
    parse(token: TwingToken): TwingNode {
        let lineno = token.getLine();
        let columnno = token.getColumn();

        this.parser.getStream().expect(TwingToken.BLOCK_END_TYPE);
        let body = this.parser.subparse([this, this.decideMarkdownEnd], true);
        this.parser.getStream().expect(TwingToken.BLOCK_END_TYPE);

        return new TwingNodeMarkdown(body, lineno, columnno, this.getTag());
    }

    decideMarkdownEnd(token: TwingToken) {
        return token.test(TwingToken.NAME_TYPE, 'endmarkdown');
    }

    getTag() {
        return 'markdown';
    }
}
