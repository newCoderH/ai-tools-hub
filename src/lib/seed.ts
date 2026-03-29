// Seed data for AI Tools - 30 tools across 6 categories
// Use this with Supabase JS client or run via npx tsx

export type SeedTool = {
  name: string;
  slug: string;
  description: string;
  website: string;
  pricing: "free" | "freemium" | "paid";
  pricingNote?: string;
  categorySlug: string;
};

export type SeedCategory = {
  name: string;
  slug: string;
  description: string;
  icon: string;
};

export const seedCategories: SeedCategory[] = [
  {
    name: "AI 对话",
    slug: "ai-chat",
    description: "大型语言模型对话助手",
    icon: "💬",
  },
  {
    name: "AI 图像",
    slug: "ai-image",
    description: "AI 图像生成与编辑工具",
    icon: "🎨",
  },
  {
    name: "AI 编程",
    slug: "ai-coding",
    description: "AI 辅助编程与代码生成工具",
    icon: "⌨️",
  },
  {
    name: "AI 写作",
    slug: "ai-writing",
    description: "AI 写作与内容创作工具",
    icon: "✍️",
  },
  {
    name: "AI 视频",
    slug: "ai-video",
    description: "AI 视频生成与编辑工具",
    icon: "🎬",
  },
  {
    name: "AI 音频",
    slug: "ai-audio",
    description: "AI 音频生成与语音合成工具",
    icon: "🎵",
  },
];

export const seedTools: SeedTool[] = [
  // AI 对话 (8)
  {
    name: "ChatGPT",
    slug: "chatgpt",
    description: "OpenAI 开发的大型语言模型，支持多轮对话、代码生成、文本创作等多种任务，是目前最流行的 AI 对话工具。",
    website: "https://chat.openai.com",
    pricing: "freemium",
    pricingNote: "免费版有限额，Plus $20/月",
    categorySlug: "ai-chat",
  },
  {
    name: "Kimi",
    slug: "kimi",
    description: "月之暗面推出的国产大模型，支持超长上下文（20万字），擅长长文档阅读、代码分析和多轮对话。",
    website: "https://kimi.moonshot.cn",
    pricing: "freemium",
    pricingNote: "免费版可用，付费版更长上下文",
    categorySlug: "ai-chat",
  },
  {
    name: "GLM",
    slug: "glm",
    description: "智谱华章开发的国产大语言模型，基于 GLM-4 系列，支持多模态理解、中英文对话和工具调用。",
    website: "https://www.bigmodel.cn",
    pricing: "freemium",
    pricingNote: "API 按量付费",
    categorySlug: "ai-chat",
  },
  {
    name: "Minimax",
    slug: "minimax",
    description: "稀宇科技推出的 AI 平台，旗下有海螺 AI 对话、星梦图等应用，涵盖对话、图像、音乐等多模态。",
    website: "https://minimax.io",
    pricing: "freemium",
    pricingNote: "免费版可用，API 按量付费",
    categorySlug: "ai-chat",
  },
  {
    name: "Claude",
    slug: "claude",
    description: "Anthropic 开发的大型语言模型，以安全性和长上下文著称，适合长文档分析、代码审查和创意写作。",
    website: "https://claude.ai",
    pricing: "freemium",
    pricingNote: "免费版可用，Pro $20/月",
    categorySlug: "ai-chat",
  },
  {
    name: "Gemini",
    slug: "gemini",
    description: "Google 开发的多模态 AI 模型，支持文本、图像、音频和视频理解，与 Google 产品深度集成。",
    website: "https://gemini.google.com",
    pricing: "freemium",
    pricingNote: "免费版可用，Advanced $20/月",
    categorySlug: "ai-chat",
  },
  {
    name: "文心一言",
    slug: "wenxinyiyan",
    description: "百度开发的国产大语言模型，擅长中文对话、内容创作和知识问答，与百度生态深度集成。",
    website: "https://yiyan.baidu.com",
    pricing: "freemium",
    pricingNote: "免费版有限额，会员¥49.9/月起",
    categorySlug: "ai-chat",
  },
  {
    name: "Grok",
    slug: "grok",
    description: "xAI 开发的 AI 助手，以幽默风格和实时信息获取为特色，集成 X 平台数据，支持深度搜索。",
    website: "https://x.ai",
    pricing: "paid",
    pricingNote: "Premium+ $22/月",
    categorySlug: "ai-chat",
  },

  // AI 图像 (4)
  {
    name: "Midjourney",
    slug: "midjourney",
    description: "专注于艺术风格图像生成的 AI 工具，以高质量和独特的美学风格闻名，广泛用于创意设计和艺术创作。",
    website: "https://www.midjourney.com",
    pricing: "paid",
    pricingNote: "$10-$120/月",
    categorySlug: "ai-image",
  },
  {
    name: "DALL-E 3",
    slug: "dall-e-3",
    description: "OpenAI 开发的图像生成模型，擅长理解复杂提示词并生成精确匹配的图像，与 ChatGPT 深度集成。",
    website: "https://openai.com/dall-e-3",
    pricing: "paid",
    pricingNote: "按生成次数计费",
    categorySlug: "ai-image",
  },
  {
    name: "Stable Diffusion",
    slug: "stable-diffusion",
    description: "开源图像生成模型，支持本地部署和自定义模型训练，生态丰富，是 AI 图像领域的重要开源力量。",
    website: "https://stability.ai",
    pricing: "free",
    pricingNote: "开源免费，支持本地部署",
    categorySlug: "ai-image",
  },
  {
    name: "Flux",
    slug: "flux",
    description: "Black Forest Labs 开发的新一代图像生成模型，以逼真的照片级图像质量著称，文本理解能力强。",
    website: "https://blackforestlabs.ai",
    pricing: "freemium",
    pricingNote: "在线版免费，高频使用付费",
    categorySlug: "ai-image",
  },

  // AI 编程 (5)
  {
    name: "GitHub Copilot",
    slug: "github-copilot",
    description: "GitHub 与 OpenAI 合作的 AI 编程助手，提供代码补全、函数生成和调试建议，支持主流 IDE 插件。",
    website: "https://github.com/features/copilot",
    pricing: "paid",
    pricingNote: "$10/月，个人版首月免费",
    categorySlug: "ai-coding",
  },
  {
    name: "Cursor",
    slug: "cursor",
    description: "专为 AI 时代打造的代码编辑器，内置多款大模型，支持代码补全、代码生成和代码审查，高度集成 AI 能力。",
    website: "https://cursor.sh",
    pricing: "freemium",
    pricingNote: "免费版有限额，Pro $20/月",
    categorySlug: "ai-coding",
  },
  {
    name: "Claude Code",
    slug: "claude-code",
    description: "Anthropic 推出的 CLI 编程工具，可以直接在终端中执行代码修改、文件创建和 Git 操作。",
    website: "https://docs.anthropic.com/claude-code",
    pricing: "freemium",
    pricingNote: "需 Claude 订阅，API 按量付费",
    categorySlug: "ai-coding",
  },
  {
    name: "Replit",
    slug: "replit",
    description: "在线 IDE + AI 编程平台，支持 50+ 编程语言，内置 Ghostwriter AI 编程助手，支持即时协作。",
    website: "https://replit.com",
    pricing: "freemium",
    pricingNote: "免费版可用，Pro $15/月",
    categorySlug: "ai-coding",
  },
  {
    name: "Codeium",
    slug: "codeium",
    description: "免费的 AI 代码补全插件，支持 70+ 语言，支持主流 IDE，代码补全速度快且无需订阅。",
    website: "https://codeium.com",
    pricing: "free",
    pricingNote: "完全免费，个人使用无限制",
    categorySlug: "ai-coding",
  },

  // AI 写作 (4)
  {
    name: "Jasper",
    slug: "jasper",
    description: "企业级 AI 写作平台，支持营销文案、博客文章、社交媒体内容生成，模板丰富，支持团队协作。",
    website: "https://jasper.ai",
    pricing: "paid",
    pricingNote: "$49/月起",
    categorySlug: "ai-writing",
  },
  {
    name: "Copy.ai",
    slug: "copy-ai",
    description: "AI 写作助手，专注于营销文案生成，支持多种文案类型，操作简单，适合快速生成广告文案和邮件。",
    website: "https://www.copy.ai",
    pricing: "freemium",
    pricingNote: "免费版2000词，Pro $49/月",
    categorySlug: "ai-writing",
  },
  {
    name: "秘塔写作猫",
    slug: "xiezuocat",
    description: "秘塔科技推出的中文 AI 写作工具，擅长错别字检查、语法纠错、文章润色和内容续写，专为中文写作优化。",
    website: "https://xiezuocat.com",
    pricing: "freemium",
    pricingNote: "免费版有限额，会员¥29/月起",
    categorySlug: "ai-writing",
  },
  {
    name: "讯飞写作",
    slug: "iflytek-write",
    description: "科大讯飞推出的 AI 写作工具，基于星火大模型，支持多场景写作、语音输入和智能润色。",
    website: "https://turbosign.iflytek.com",
    pricing: "freemium",
    pricingNote: "免费版可用，会员按需订阅",
    categorySlug: "ai-writing",
  },

  // AI 视频 (3)
  {
    name: "Sora",
    slug: "sora",
    description: "OpenAI 开发的视频生成模型，可以根据文本描述生成高质量、最长60秒的视频，支持复杂的场景和动作。",
    website: "https://openai.com/sora",
    pricing: "paid",
    pricingNote: "需 ChatGPT Plus/Pro 订阅",
    categorySlug: "ai-video",
  },
  {
    name: "Runway",
    slug: "runway",
    description: "AI 视频创作平台，提供 Gen-3 等先进视频生成模型，支持视频编辑、特效添加和文生视频功能。",
    website: "https://runwayml.com",
    pricing: "freemium",
    pricingNote: "免费版有限额，Pro $35/月",
    categorySlug: "ai-video",
  },
  {
    name: "Pika",
    slug: "pika",
    description: "专注于 AI 视频生成的平台，操作简单，支持文本转视频和图片转视频，适合快速生成短视频内容。",
    website: "https://pika.art",
    pricing: "freemium",
    pricingNote: "免费版有限额，Pro $8/月起",
    categorySlug: "ai-video",
  },

  // AI 音频 (3)
  {
    name: "ElevenLabs",
    slug: "elevenlabs",
    description: "AI 语音合成平台，提供自然逼真的多语言语音生成，支持声音克隆、情感控制和专业配音。",
    website: "https://elevenlabs.io",
    pricing: "freemium",
    pricingNote: "免费版10000字符，Pro $5/月起",
    categorySlug: "ai-audio",
  },
  {
    name: "Suno",
    slug: "suno",
    description: "AI 音乐生成平台，可以根据文本描述生成完整歌曲，包括词曲、演唱和编曲，支持多种音乐风格。",
    website: "https://suno.ai",
    pricing: "freemium",
    pricingNote: "免费版每日额度，Pro $10/月",
    categorySlug: "ai-audio",
  },
  {
    name: "Udio",
    slug: "udio",
    description: "AI 音乐生成工具，支持高质量音乐创作，用户可自定义歌词、风格和情绪，快速生成定制化音乐作品。",
    website: "https://udio.com",
    pricing: "freemium",
    pricingNote: "免费版可用，付费版更多额度",
    categorySlug: "ai-audio",
  },
];

// Supabase seed function
export async function seedSupabase(supabaseUrl: string, supabaseKey: string) {
  const { createClient } = await import("@supabase/supabase-js");
  const client = createClient(supabaseUrl, supabaseKey);

  // Insert categories
  for (const cat of seedCategories) {
    const { error } = await client.from("categories").upsert([cat], {
      onConflict: "slug",
    });
    if (error) console.error(`Error upserting category ${cat.slug}:`, error);
  }

  // Fetch category IDs
  const { data: categories } = await client
    .from("categories")
    .select("id, slug");

  const categoryMap = new Map(categories?.map((c) => [c.slug, c.id]) || []);

  // Insert tools
  for (const tool of seedTools) {
    const categoryId = categoryMap.get(tool.categorySlug);
    if (!categoryId) {
      console.warn(`Category not found for tool: ${tool.slug}`);
      continue;
    }

    const { error } = await client.from("tools").upsert(
      [
        {
          name: tool.name,
          slug: tool.slug,
          description: tool.description,
          website: tool.website,
          pricing: tool.pricing,
          pricingNote: tool.pricingNote,
          categoryId,
        },
      ],
      { onConflict: "slug" }
    );

    if (error) {
      console.error(`Error upserting tool ${tool.slug}:`, error);
    }
  }

  console.log("Seed completed!");
}
