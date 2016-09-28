module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        'quotes': ['error', 'single', {'allowTemplateLiterals': true}],
        // camelcase
        'camelcase': 'off',
        // padded code blocks
        'padded-blocks': 'off',
        // object key-spacing
        'key-spacing': ['error', { 'mode': 'minimum' }],
        // 4 spaces
        'indent': ['error', 4, { "SwitchCase": 1 }],
        // allow unused vars
        'no-unused-vars': 0,
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // multiple spaces
        'no-multi-spaces': 'off'
    }
}
