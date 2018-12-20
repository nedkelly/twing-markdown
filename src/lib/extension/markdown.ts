import { TwingExtension, TwingRuntimeLoaderInterface, TwingFilter, TwingFunction } from "twing";
import { TwingTokenParserMarkdown } from "../token-parser/markdown";
import marked = require("marked");

export class TwingExtensionMarkdown extends TwingExtension {
    private content: string;

    constructor(content: string) {
        super();

        this.content = content;
    }

    getFilters() {
        return new Map([
            [0, new TwingFilter('markdown', this.markdown, {
                is_safe: ['html']
            })],
        ]);
    }

    markdown(content: string) {
        return marked(content);
    }

    getTokenParsers() {
        return [
            new TwingTokenParserMarkdown()
        ];
    }
}
