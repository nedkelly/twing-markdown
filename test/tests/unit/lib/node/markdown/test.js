const { TwingNodeText, TwingNode, TwingNodeType } = require('twing');
const { TwingNodeMarkdown } = require('../../../../../../build/lib/node/markdown');
const TwingTestMockCompiler = require('../../../../../mock/compiler');

const tap = require('tape');

tap.test('node/markdown', function (test) {
    test.test('constructor', function (test) {
        let bodyNodes = new Map([
            [0, new TwingNodeText('<div>   <div>   foo   </div>   </div>', 1, 1)]
        ]);

        let body = new TwingNode(bodyNodes);
        let node = new TwingNodeMarkdown(body, 1, 1, 'markdown');

        test.same(node.getNode('body'), body);
        test.same(node.getType(), TwingNodeType.TEXT);
        test.same(node.getTemplateLine(), 1);
        test.same(node.getTemplateColumn(), 1);

        test.end();
    });

    test.test('compile', function (test) {
        let bodyNodes = new Map([
            [0, new TwingNodeText('<div>   <div>   foo   </div>   </div>', 1, 1)]
        ]);

        let body = new TwingNode(bodyNodes);
        let node = new TwingNodeMarkdown(body, 1, 1, 'markdown');
        let compiler = new TwingTestMockCompiler();

        test.same(compiler.compile(node).getSource(), `// line 1, column 1
Runtime.obStart();
Runtime.echo(\`<div>   <div>   foo   </div>   </div>\`);
Runtime.echo(Runtime.obGetClean());
`);

        test.end();
    });

    test.end();
});
