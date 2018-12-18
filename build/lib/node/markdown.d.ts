import { TwingNode, TwingCompiler } from "Twing";
/**
 * Represents a markdown node.
 */
export declare class TwingNodeMarkdown extends TwingNode {
    constructor(value: {}, body: TwingNode, lineno: number, columnno: number, tag?: string);
    compile(compiler: TwingCompiler): void;
}
