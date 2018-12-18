import { TwingExtension } from "twing";
import { TwingTokenParserMarkdown } from "../token-parser/markdown";
export declare class TwingExtensionMarkdown extends TwingExtension {
    constructor();
    getTokenParsers(): TwingTokenParserMarkdown[];
}
