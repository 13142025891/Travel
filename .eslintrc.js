module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module'
    },

    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}