import { TwingNode, TwingNodeType, TwingCompiler, TwingNodeOutputInterface } from "twing";
import marked = require("marked");

/**
 * Represents a markdown node.
 */
export class TwingNodeMarkdown extends TwingNode {
    TwingNodeOutputInterfaceImpl: TwingNodeOutputInterface;

    constructor(body: TwingNode, lineno: number, columnno: number, tag = 'markdown') {
        let nodes = new Map();

        nodes.set('body', body);

        super(nodes, new Map(), lineno, columnno, tag);

        this.type = TwingNodeType.TEXT;

        this.TwingNodeOutputInterfaceImpl = this;

        // TODO: now need to figure out how to pipe markdown text into `marked()` and the return the result.
        // let out = marked('### Some test md..');
        // console.log(`output: ${out}`);
        // console.log(this.toString());

    }

    compile(compiler: TwingCompiler) {
        compiler
            .addDebugInfo(this)
            .addSourceMapEnter(this)
            .write("Runtime.obStart();\n")
            .subcompile(this.getNode('body'))
            .write("Runtime.echo(Runtime.obGetClean());\n")
            .addSourceMapLeave()
        ;
    }
}
