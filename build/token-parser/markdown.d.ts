/**
 * Converts a `markdown` section of a template to `html`.
 */
import { TwingTokenParser, TwingToken, TwingNode } from "twing";
export declare class TwingTokenParserMarkdown extends TwingTokenParser {
    parse(token: TwingToken): TwingNode;
    decideBlockEnd(token: TwingToken): boolean;
    getTag(): string;
}
