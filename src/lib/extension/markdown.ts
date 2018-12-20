import { TwingExtension, TwingFilter } from "twing";
import { TwingTokenParserMarkdown } from "../token-parser/markdown";
import marked = require("marked");

export class TwingMarkdown {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    render() {
        return marked(this.content);
    }

}

export class TwingExtensionMarkdown extends TwingExtension {
    constructor() {
        super();
    }

    getFilters() {
        return new Map([
            [0, new TwingFilter('markdown', this.parseMarkdown, {
                is_safe: ['html']
            })],
        ]);
    }

    parseMarkdown(content: string) {
        return marked(content);
    }

    getTokenParsers() {
        return [
            new TwingTokenParserMarkdown()
        ];
    }
}
