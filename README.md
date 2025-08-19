# 🚀 Vue Tailwind Home

一个基于 **Vue 3 + Vite + Tailwind CSS** 构建的现代化、响应式个人主页项目，支持 **国际化** 与 **移动优先**设计，帮助你快速搭建简洁美观的个人展示网站。

## ✨ 项目特色

- ⚡ **快速开发**: 基于 Vite 构建，极致的冷启动速度
- 🎨 **现代化设计**: 使用 Tailwind CSS 4.x 构建响应式 UI
- 🌍 **国际化支持**: 内置中英文切换功能 (Vue I18n)
- 📱 **移动优先**: 完全响应式布局，适配手机、平板和桌面端
- 🔧 **TypeScript**: 完整的类型支持，提升开发效率
- 🧩 **模块化组件**: 提供可复用的 UI 组件，方便扩展
- 🎯 **可扩展性强**: 支持自定义图标、主题切换等功能

## 🛠️ 技术栈

- **前端框架**: Vue 3.5 + Composition API
- **构建工具**: Vite 7.x
- **样式框架**: Tailwind CSS 4.x
- **语言**: TypeScript
- **国际化**: Vue I18n 11.x
- **图标**: 自定义图标组件 + 支持第三方图标库

## 📂 项目结构

```
vue-tailwind-home/
├── src/
│   ├── components/          # 页面组件
│   │   ├── About.vue        # 关于我
│   │   ├── Header.vue       # 页面头部
│   │   ├── Hero.vue         # 主页横幅
│   │   ├── Skills.vue       # 技能展示
│   │   ├── Footer.vue       # 页脚
│   │   └── SocialIcon.vue   # 社交图标
│   ├── i18n/                # 国际化配置
│   │   ├── en.ts            # 英文语言包
│   │   └── zh.ts            # 中文语言包
│   ├── App.vue              # 根组件
│   ├── main.ts              # 应用入口
│   └── style.css            # 全局样式
├── public/                  # 静态资源
├── index.html               # 入口 HTML
└── package.json             # 项目配置
```

## 🚀 快速开始

### 环境要求

- Node.js **16.x** 或更高版本
- 包管理工具：npm 或 yarn

## 🔌 VS Code 插件推荐

为了提升开发体验，建议安装以下插件：

- **Vue 官方插件**

  - [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

    > Vue 3 官方推荐插件，支持 `<script setup>` 和 TypeScript。

- **TypeScript & 语法支持**

  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

    > 保持代码风格统一。

  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

    > 统一代码格式。

- **样式 & Tailwind**

  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

    > 提供类名提示、预览和语法高亮。

  - [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)

    > 让 `style.css` 等文件有更好的语法支持。

- **国际化支持**

  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)

    > 自动识别 `src/i18n/` 下的语言包，提供智能提示和翻译管理。

- **调试与工具**

  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite)

    > 对 Vite 项目提供更好的支持。

  - [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

    > 自动补全文件路径。

  - [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)

    > `.env` 文件高亮。

### 安装依赖

~~~
npm install
# 或
yarn install
~~~

### 启动开发环境

```
npm run dev
# 或
yarn dev
```

访问 👉 `http://localhost:5173`

### 构建生产版本

```
npm run preview
# 或
yarn preview
```

## 📖 开发规范

- 代码风格遵循 **ESLint + Prettier**
- 组件命名采用 **PascalCase**
- 样式尽量使用 **Tailwind 工具类**，减少自定义 CSS
- 国际化文案统一存放在 `src/i18n/` 目录
