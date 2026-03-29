# AI Tools Hub

[English](./README.md) | [中文](./README_CN.md)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/yourusername/ai-tools-hub)](https://github.com/yourusername/ai-tools-hub/stargazers)

> 发现最好的 AI 工具，中文最靠谱的 AI 工具评测与对比平台

## 功能特点

- **全面收录** - 涵盖多个分类的 AI 工具
- **详细对比** - 工具横向对比
- **真实评测** - 真实用户评价和评分
- **价格透明** - 清晰的价格信息

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **数据库**: Supabase (PostgreSQL)
- **部署**: Vercel / VPS

## 快速开始

```bash
# 克隆仓库
git clone https://github.com/yourusername/ai-tools-hub.git
cd ai-tools-hub

# 安装依赖
npm install

# 配置环境变量
cp .env.local.example .env.local
# 填入你的 Supabase 配置

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 项目结构

```
src/
├── app/                    # Next.js App Router 页面
│   ├── page.tsx           # 首页
│   ├── tools/[slug]/      # 工具详情页
│   ├── category/[slug]/   # 分类页
│   └── compare/           # 对比页
├── components/            # React 组件
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
└── lib/                   # 工具函数
    ├── supabase.ts
    └── mockData.ts
```

## 参与贡献

欢迎提交 Pull Request！

## 开源协议

本项目基于 MIT 协议开源。
