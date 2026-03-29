# AI Tools Hub

[English](./README.md) | [中文](./README_CN.md)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/yourusername/ai-tools-hub)](https://github.com/yourusername/ai-tools-hub/stargazers)

> A curated collection of the best AI tools, helping users discover, compare, and choose the right AI assistant for their needs.

## Features

- **Comprehensive Catalog** - Browse AI tools across multiple categories
- **Detailed Comparisons** - Compare tools side-by-side
- **Real Reviews** - Authentic user reviews and ratings
- **Price Transparency** - Clear pricing information

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel / VPS

## Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-tools-hub.git
cd ai-tools-hub

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Fill in your Supabase credentials

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── tools/[slug]/      # Tool detail pages
│   ├── category/[slug]/   # Category pages
│   └── compare/           # Comparison page
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
└── lib/                   # Utilities and helpers
    ├── supabase.ts
    └── mockData.ts
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
