
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/fangjianchi/project-iris/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/fangjianchi/project-iris/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/fangjianchi/project-iris/src/pages/index.js"))
}

