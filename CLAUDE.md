@AGENTS.md

# 铁律

**在用户确认之前，禁止修改代码或提交代码。** 只做分析和提出修复方案，等用户确认后再执行修改和提交。

# 踩坑记录

## Next.js Standalone 静态文件 404

**问题**：Next.js standalone 模式部署后 `/_next/static/` 资源全部 404。

**根因**：
- `server.js` 的 `dir` 指向 `standalone/` 目录
- `distDir="./.next"` 解析为 `standalone/.next/`
- 但静态文件部署在项目根目录的 `.next/static/`
- Next.js 在 `standalone/.next/static/` 找不到文件

**关键文件**：`standalone/server.js` 第 3 行 `const dir = path.join(__dirname)`

**修复方案**：
1. 修改 `chdir(__dirname)` → `chdir(dir)`（保持 `dir` 指向 `standalone/`）
2. CI 部署后创建软链接：`standalone/.next/static` → `../../static`

**教训**：Next.js standalone 的构建产物在 `standalone/.next/`，但静态文件在根目录 `.next/static/`。rsync 上传后需要手动关联。
