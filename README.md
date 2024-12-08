# How To Run

1. Clone the repo 
```bash
$ git clone https://github.com/zhang-yixiang/20241206.git
```
2. Change to the repo dir
```bash
$ cd pdf-ai-client
```
3. Install dependencies
```bash
$ npm install
```
4. Run the dev env.
```bash
npm run dev
```
5.Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

6. Open [https://20241206.vercel.app/tools/rotate-pdf](https://20241206.vercel.app/tools/rotate-pdf) to review

```
app
├── components 全局组件
│   ├── footer
│   │   ├── footer-content.js
│   │   ├── footer.js
│   │   ├── site-info.js
│   │   ├── site-map-col.js
│   │   ├── site-map.js
│   │   └── social-template.js 
│   ├── loading-spin.js
│   ├── nav-bar
│   │   ├── common-nav-bar.js
│   │   ├── logo.js
│   │   ├── menu-button.js
│   │   ├── nav-menu-desktop.js
│   │   └── nav-menu-mobile.js
│   └── uploader.js
├── config 配置和常数
│   ├── links.js
│   ├── nav-routes.js
│   └── page-meta.js
├── favicon.ico
├── fonts
│   └── tiempos-headline-light.woff2
├── globals.css
├── icons
│   ├── close.svg
│   ├── instagram.svg
│   ├── logo.svg
│   ├── menu.svg
│   ├── rotate.svg
│   ├── tiktok.svg
│   ├── twitter.svg
│   ├── upload.svg
│   ├── youtube.svg
│   ├── zoom-in.svg
│   └── zoom-out.svg
├── layout.js 全局layout
├── page.js
├── robots.txt
├── services 工具函数和工具类
│   └── utils.js
├── sitemap.xml
└── tools 工具页面
    ├── components
    │   ├── drag-select.js
    │   ├── page-and-name-wrapper.js
    │   ├── page-container.js
    │   └── page-title.js
    ├── layout.js
    └── rotate-pdf
        ├── components
        │   ├── control-panel.js
        │   └── download-bar.js
        ├── page-content.js
        └── page.js

```