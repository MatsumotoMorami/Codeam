const withLess = require('next-with-less');

module.exports = withLess({
    reactStrictMode: true
});



/* 
const withLess = require('next-with-less');
const path = require('path');

module.exports = withLess({
    webpack5: false, // 添加此行
    lessLoaderOptions: {
        lessOptions: {
            modifyVars: {
                // 你可以在此处覆盖 Ant Design 的默认主题变量
                // 例如：
                '@primary-color': '#1890ff', // 蓝色
                '@link-color': '#1890ff',    // 蓝色链接
                '@success-color': '#52c41a', // 绿色成功
            },
            // 将你的 custom-theme.less 文件导入
            additionalData: `@import "${path.join(__dirname, 'app/styles/custom-theme.less')}";`,
        },
    },
});
*/
