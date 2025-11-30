module.exports = {
    content: ['./dist/**/*.html','./dist/**/*.js'],
    css: ['./dist/assets/**/*.css'],
    safelist: {
        standard: ['html', 'body', 'btn'],
        deep: [/^btn/, /^gap/, /^table/, /tooltip.*/, /feedback$/] 
    },
};
