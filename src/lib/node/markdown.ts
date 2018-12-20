import { TwingNode, TwingNodeType, TwingCompiler, TwingNodeOutputInterface } from "twing";

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
    }

    compile(compiler: TwingCompiler) {
        compiler
            .addDebugInfo(this)
            .addSourceMapEnter(this)
            .write("Runtime.obStart();\n")
            .subcompile(this.getNode('body'))
            .write("(")
            .raw("() => {\n")
            .indent()
            .write("let content = Runtime.obGetClean();\n")
            .write("let matches = content.match(/^\s*/);\n")
            .write("let lines = content.split('\\n');\n")
            .write("let re = new RegExp(`/^${matches[0]}/`, 'g');\n")
            .write("content =  lines.map(l => l.replace(re));\n")
            .write("content = content.join('\\n');\n")
            .write("let markdown = new Runtime.TwingMarkdown(content);\n")
            .write("Runtime.echo(markdown.render());\n")
            .outdent()
            .write("})();\n")
            .addSourceMapLeave();
        console.log(compiler.getSource());
    }
}
