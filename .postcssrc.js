// https://github.com/michael-ciniawsky/postcss-load-config
// 优化CSS代码
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    // 自动增加浏览器CSS属性前缀
    "autoprefixer": {}
  }
}
