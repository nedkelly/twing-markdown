const { TwingTokenStream, TwingToken, TwingParser, TwingErrorSyntax, TwingSource } = require("twing");
const TwingTestMockBuilderParser = require('../../../../../mock-builder/parser');
const { TwingTokenParserMarkdown } = require("../../../../../../build/lib/token-parser/markdown");

const tap = require('tape');
const sinon = require('sinon');

class ExpressionParser {
    parseExpression() {
        return new TwingToken(TwingToken.NAME_TYPE, 'markdown', 1);
    }
}

tap.test('token-parser/markdown', function (test) {
    test.test('parse', function (test) {
        test.test('when endmarkdown name doesn\'t match', function (test) {
            let stream = new TwingTokenStream([
                new TwingToken(TwingToken.NAME_TYPE, 'markdown', 1),
                new TwingToken(TwingToken.BLOCK_END_TYPE, null, 1),
                new TwingToken(TwingToken.TEXT_TYPE, '# Some Markdown Text', 1),
                new TwingToken(TwingToken.BLOCK_START_TYPE, null, 1),
                new TwingToken(TwingToken.NAME_TYPE, 'endmarkdown', 1),
                new TwingToken(TwingToken.NAME_TYPE, 'endsomething', 1),
                new TwingToken(TwingToken.BLOCK_END_TYPE, null, 1)
            ]);


            let tokenParser = new TwingTokenParserMarkdown();
            let parser = TwingTestMockBuilderParser.getParser(stream, new ExpressionParser());

            sinon.stub(parser, 'getStream').returns(stream);

            tokenParser.setParser(parser);

            test.throws(function () {
                tokenParser.parse(new TwingToken(TwingToken.NAME_TYPE, 'markdown', 1));
            }, new TwingErrorSyntax('Expected endmarkdown tag.', 1, new TwingSource('', '')));

            test.end();
        });

        test.end();
    });

    test.end();
});