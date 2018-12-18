"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Twing_1 = require("Twing");
/**
 * Represents a markdown node.
 */
class TwingNodeMarkdown extends Twing_1.TwingNode {
    constructor(value, body, lineno, columnno, tag = 'markdown') {
        super(new Map([['body', body]]), new Map([['value', value]]), lineno, columnno, tag);
        this.type = Twing_1.TwingNodeType.TEXT;
    }
    compile(compiler) {
        compiler.subcompile(this.getNode('body'));
    }
}
exports.TwingNodeMarkdown = TwingNodeMarkdown;
//# sourceMappingURL=markdown.js.map