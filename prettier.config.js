/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: true,
  htmlWhitespaceSensitivity: 'strict',
  singleAttributePerLine: true,
  overrides: [
    {
      files: ['*.jinja'],
      options: {
        parser: 'jinja-template',
      },
    },
  ],
};
