const { TwingEnvironment } = require('twing');

module.exports = class extends TwingEnvironment {
    getTemplateClass(name, index = null) {
        return `__TwingTemplate_foo${(index === null ? '' : '_' + index)}`;
    }
};
