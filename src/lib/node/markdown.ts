import { TwingNode, TwingNodeType, TwingCompiler } from "Twing";

/**
 * Represents a markdown node.
 */
export class TwingNodeMarkdown extends TwingNode {
  constructor(value: {}, body: TwingNode, lineno: number, columnno: number, tag = 'markdown') {
    super(new Map([['body', body]]), new Map([['value', value]]), lineno, columnno, tag);

    this.type = TwingNodeType.TEXT;
  }

  compile(compiler: TwingCompiler) {
    compiler.subcompile(this.getNode('body'));
  }
}
