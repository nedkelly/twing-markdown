"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const twing_1 = require("twing");
const markdown_1 = require("../token-parser/markdown");
class TwingExtensionMarkdown extends twing_1.TwingExtension {
    constructor() {
        super();
    }
    getTokenParsers() {
        return [
            new markdown_1.TwingTokenParserMarkdown()
        ];
    }
}
exports.TwingExtensionMarkdown = TwingExtensionMarkdown;
//# sourceMappingURL=markdown.js.map