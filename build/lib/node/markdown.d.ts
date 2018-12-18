import { TwingNode, TwingCompiler, TwingNodeOutputInterface } from "Twing";
/**
 * Represents a markdown node.
 */
export declare class TwingNodeMarkdown extends TwingNode {
    TwingNodeOutputInterfaceImpl: TwingNodeOutputInterface;
    constructor(body: TwingNode, lineno: number, columnno: number, tag?: string);
    compile(compiler: TwingCompiler): void;
}
