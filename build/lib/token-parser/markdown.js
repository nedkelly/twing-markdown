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
        this.parser.getStream().expect(twing_1.TwingToken.BLOCK_END_TYPE);
        let body = this.parser.subparse([this, this.decideMarkdownEnd], true);
        this.parser.getStream().expect(twing_1.TwingToken.BLOCK_END_TYPE);
        return new markdown_1.TwingNodeMarkdown(body, lineno, columnno, this.getTag());
    }
    decideMarkdownEnd(token) {
        return token.test(twing_1.TwingToken.NAME_TYPE, 'endmarkdown');
    }
    getTag() {
        return 'markdown';
    }
}
exports.TwingTokenParserMarkdown = TwingTokenParserMarkdown;
//# sourceMappingURL=markdown.js.map