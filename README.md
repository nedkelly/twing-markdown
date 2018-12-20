# Twing Markdown
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage percentage][coveralls-image]][coveralls-url]

Implements [Marked](https://www.npmjs.com/package/marked) for [Twing](https://www.npmjs.com/package/twing) using twig `{% markdown %} {% endmarkdown %}` tags.

_**NB:** Not yet implemented in browser!_

## Example

Twig:
```twig
{# With Filter #}

{{ '# Some markdown here...'|markdown }}

{# With Tag #}

{% markdown %}
  # Some markdown here...
{% endmarkdown %}
```

HTML:
```html
<h1 id="some-markdown-here-">Some markdown here...</h1>
```

## Usage

```javascript
import { TwingLoaderFilesystem, TwingEnvironment } from "twing";
import { TwingExtensionMarkdown } from "twing-markdown";

const loader = new TwingLoaderFilesystem('/path/to/templates');
const twing = new TwingEnvironment(loader);

twing.addExtension(new TwingExtensionMarkdown());
```

## Twing

Read the [Twing Documentation](http://ericmorand.github.io/twing) for more information.

## Contributing

* Fork this repository
* Code
* Implement tests using [tape](https://github.com/substack/tape)
* Issue a pull request keeping in mind that all pull requests must reference an issue in the issue queue

## Thanks To

- [Eric MORAND](https://github.com/ericmorand) for his effort to create [Twing](https://www.npmjs.com/package/twing)
- [The team @ markedjs](https://github.com/orgs/markedjs/people) for [Marked](https://www.npmjs.com/package/marked)


## License

Copyright © 2018 [Nathan Kelly](https://github.com/nedkelly). Released under the [2-Clause BSD License](https://github.com/nedkelly/twing-markdown/blob/master/LICENSE).

[npm-image]: https://badge.fury.io/js/twing-markdown.svg
[npm-url]: https://npmjs.org/package/twing-markdown
[travis-image]: https://travis-ci.org/nedkelly/twing-markdown.svg?branch=master
[travis-url]: https://travis-ci.org/nedkelly/twing-markdown
[coveralls-image]: https://coveralls.io/repos/github/nedkelly/twing-markdown/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/nedkelly/twing-markdown?branch=master
