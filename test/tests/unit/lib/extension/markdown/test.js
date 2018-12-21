const { TwingExtensionMarkdown } = require('../../../../../../build/index');
// const marked = require('marked');
const tap = require('tape');

tap.test('extension/markdown', function (test) {
    let extension = new TwingExtensionMarkdown();

    test.test('getFilters', function (test) {
        extension.getFilters();

        let filter = extension.getFilters().get(0);
        filter.setArguments('# This is a markdown string');

        test.same(filter.getCallable()(filter.getArguments()), '<h1 id="this-is-a-markdown-string">This is a markdown string</h1>\n');

        test.end();
    });

    test.test('markdown', function (test) {
        test.same(extension.markdown('# This is a markdown string'), '<h1 id="this-is-a-markdown-string">This is a markdown string</h1>\n');
        test.end();
    });

    test.test('getTokenParsers', function (test) {
        test.same(extension.getTokenParsers().length, 1);
        test.end();
    });

    test.end();
});