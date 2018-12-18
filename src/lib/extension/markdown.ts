import { TwingExtension } from "twing";
import { TwingTokenParserMarkdown } from "../token-parser/markdown";

export class TwingExtensionMarkdown extends TwingExtension {
  constructor() {
    super();
  }

  getTokenParsers() {
    return [
      new TwingTokenParserMarkdown()
    ];
  }
}
