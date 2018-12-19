"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Twing_1 = require("Twing");
/**
 * Represents a markdown node.
 */
class TwingNodeMarkdown extends Twing_1.TwingNode {
    constructor(body, lineno, columnno, tag = 'markdown') {
        let nodes = new Map();
        nodes.set('body', body);
        super(nodes, new Map(), lineno, columnno, tag);
        this.type = Twing_1.TwingNodeType.TEXT;
        this.TwingNodeOutputInterfaceImpl = this;
        // TODO: now need to figure out how to pipe markdown text into `marked()` and the return the result.
        // let out = marked('### Some test md..');
        // console.log(`output: ${out}`);
        // console.log(this.toString());
    }
    compile(compiler) {
        compiler
            .addDebugInfo(this)
            .addSourceMapEnter(this)
            .write("Runtime.obStart();\n")
            .subcompile(this.getNode('body'))
            .write("Runtime.echo(Runtime.obGetClean());\n")
            .addSourceMapLeave();
    }
}
exports.TwingNodeMarkdown = TwingNodeMarkdown;
//# sourceMappingURL=markdown.js.map