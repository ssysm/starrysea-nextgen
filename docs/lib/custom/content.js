'use strict';

var fs = require('fs');

/**
 * This file exports the content of your website, as a bunch of concatenated
 * Markdown files. By doing this explicitly, you can control the order
 * of content without any level of abstraction.
 *
 * Using the brfs module, fs.readFileSync calls in this file are translated
 * into strings of those files' content before the file is delivered to a
 * browser: the content is read ahead-of-time and included in bundle.js.
 */
module.exports = '# 简介\n' + fs.readFileSync('./content/introduction.md', 'utf8') + '\n' + '# 验证登陆\n' + fs.readFileSync('./content/auth.md', 'utf8') + '\n' + '# 活动\n' + fs.readFileSync('./content/activity.md', 'utf8') + '\n' + '# 募捐\n' + fs.readFileSync('./content/funding.md', 'utf8') + '\n' + '# 作品\n' + fs.readFileSync('./content/work.md', 'utf8') + '\n' + '# 版本\n' + fs.readFileSync('./content/version.md', 'utf8') + '\n' + '# 提问回答\n' + fs.readFileSync('./content/qa.md', 'utf8');