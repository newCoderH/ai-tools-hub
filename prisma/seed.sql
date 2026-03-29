-- Supabase SQL Seed Script for AI Tools Comparison Website
-- Run this in Supabase SQL Editor (Dashboard > SQL Editor > New Query)

-- =============================================
-- Step 1: Create tables
-- =============================================

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT
);

-- Tools table
CREATE TABLE IF NOT EXISTS tools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  website TEXT,
  logo_url TEXT,
  pricing TEXT CHECK (pricing IN ('free', 'freemium', 'paid')),
  pricing_note TEXT,
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tool_id UUID REFERENCES tools(id) ON DELETE CASCADE,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  content TEXT,
  author TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- Step 2: Insert categories
-- =============================================

INSERT INTO categories (name, slug, description, icon) VALUES
  ('AI 对话', 'ai-chat', '大型语言模型对话助手', '💬'),
  ('AI 图像', 'ai-image', 'AI 图像生成与编辑工具', '🎨'),
  ('AI 编程', 'ai-coding', 'AI 辅助编程与代码生成工具', '⌨️'),
  ('AI 写作', 'ai-writing', 'AI 写作与内容创作工具', '✍️'),
  ('AI 视频', 'ai-video', 'AI 视频生成与编辑工具', '🎬'),
  ('AI 音频', 'ai-audio', 'AI 音频生成与语音合成工具', '🎵')
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon;

-- =============================================
-- Step 3: Insert tools
-- =============================================

INSERT INTO tools (name, slug, description, website, pricing, pricing_note, category_id) VALUES

  -- AI 对话 (8)
  ('ChatGPT', 'chatgpt',
   'OpenAI 开发的大型语言模型，支持多轮对话、代码生成、文本创作等多种任务，是目前最流行的 AI 对话工具。',
   'https://chat.openai.com', 'freemium', '免费版有限额，Plus $20/月',
   (SELECT id FROM categories WHERE slug = 'ai-chat')),

  ('Claude', 'claude',
   'Anthropic 开发的大型语言模型，以安全性和长上下文著称，适合长文档分析、代码审查和创意写作。',
   'https://claude.ai', 'freemium', '免费版可用，Pro $20/月',
   (SELECT id FROM categories WHERE slug = 'ai-chat')),

  ('Gemini', 'gemini',
   'Google 开发的多模态 AI 模型，支持文本、图像、音频和视频理解，与 Google 产品深度集成。',
   'https://gemini.google.com', 'freemium', '免费版可用，Advanced $20/月',
   (SELECT id FROM categories WHERE slug = 'ai-chat')),

  ('Kimi', 'kimi',
   '月之暗面推出的国产大模型，支持超长上下文（20万字），擅长长文档阅读、代码分析和多轮对话。',
   'https://kimi.moonshot.cn', 'freemium', '免费版可用，付费版更长上下文',
   (SELECT id FROM categories WHERE slug = 'ai-chat')),

  ('GLM', 'glm',
   '智谱华章开发的国产大语言模型，基于 GLM-4 系列，支持多模态理解、中英文对话和工具调用。',
   'https://www.bigmodel.cn', 'freemium', 'API 按量付费',
   (SELECT id FROM categories WHERE slug = 'ai-chat')),

  ('Minimax', 'minimax',
   '稀宇科技推出的 AI 平台，旗下有海螺 AI 对话、星梦图等应用，涵盖对话、图像、音乐等多模态。',
   'https://minimax.io', 'freemium', '免费版可用，API 按量付费',
   (SELECT id FROM categories WHERE slug = 'ai-chat')),

  ('文心一言', 'wenxinyiyan',
   '百度开发的国产大语言模型，擅长中文对话、内容创作和知识问答，与百度生态深度集成。',
   'https://yiyan.baidu.com', 'freemium', '免费版有限额，会员¥49.9/月起',
   (SELECT id FROM categories WHERE slug = 'ai-chat')),

  ('Grok', 'grok',
   'xAI 开发的 AI 助手，以幽默风格和实时信息获取为特色，集成 X 平台数据，支持深度搜索。',
   'https://x.ai', 'paid', 'Premium+ $22/月',
   (SELECT id FROM categories WHERE slug = 'ai-chat')),

  -- AI 图像 (4)
  ('Midjourney', 'midjourney',
   '专注于艺术风格图像生成的 AI 工具，以高质量和独特的美学风格闻名，广泛用于创意设计和艺术创作。',
   'https://www.midjourney.com', 'paid', '$10-$120/月',
   (SELECT id FROM categories WHERE slug = 'ai-image')),

  ('DALL-E 3', 'dall-e-3',
   'OpenAI 开发的图像生成模型，擅长理解复杂提示词并生成精确匹配的图像，与 ChatGPT 深度集成。',
   'https://openai.com/dall-e-3', 'paid', '按生成次数计费',
   (SELECT id FROM categories WHERE slug = 'ai-image')),

  ('Stable Diffusion', 'stable-diffusion',
   '开源图像生成模型，支持本地部署和自定义模型训练，生态丰富，是 AI 图像领域的重要开源力量。',
   'https://stability.ai', 'free', '开源免费，支持本地部署',
   (SELECT id FROM categories WHERE slug = 'ai-image')),

  ('Flux', 'flux',
   'Black Forest Labs 开发的新一代图像生成模型，以逼真的照片级图像质量著称，文本理解能力强。',
   'https://blackforestlabs.ai', 'freemium', '在线版免费，高频使用付费',
   (SELECT id FROM categories WHERE slug = 'ai-image')),

  -- AI 编程 (5)
  ('GitHub Copilot', 'github-copilot',
   'GitHub 与 OpenAI 合作的 AI 编程助手，提供代码补全、函数生成和调试建议，支持主流 IDE 插件。',
   'https://github.com/features/copilot', 'paid', '$10/月，个人版首月免费',
   (SELECT id FROM categories WHERE slug = 'ai-coding')),

  ('Cursor', 'cursor',
   '专为 AI 时代打造的代码编辑器，内置多款大模型，支持代码补全、代码生成和代码审查，高度集成 AI 能力。',
   'https://cursor.sh', 'freemium', '免费版有限额，Pro $20/月',
   (SELECT id FROM categories WHERE slug = 'ai-coding')),

  ('Claude Code', 'claude-code',
   'Anthropic 推出的 CLI 编程工具，可以直接在终端中执行代码修改、文件创建和 Git 操作。',
   'https://docs.anthropic.com/claude-code', 'freemium', '需 Claude 订阅，API 按量付费',
   (SELECT id FROM categories WHERE slug = 'ai-coding')),

  ('Replit', 'replit',
   '在线 IDE + AI 编程平台，支持 50+ 编程语言，内置 Ghostwriter AI 编程助手，支持即时协作。',
   'https://replit.com', 'freemium', '免费版可用，Pro $15/月',
   (SELECT id FROM categories WHERE slug = 'ai-coding')),

  ('Codeium', 'codeium',
   '免费的 AI 代码补全插件，支持 70+ 语言，支持主流 IDE，代码补全速度快且无需订阅。',
   'https://codeium.com', 'free', '完全免费，个人使用无限制',
   (SELECT id FROM categories WHERE slug = 'ai-coding')),

  -- AI 写作 (4)
  ('Jasper', 'jasper',
   '企业级 AI 写作平台，支持营销文案、博客文章、社交媒体内容生成，模板丰富，支持团队协作。',
   'https://jasper.ai', 'paid', '$49/月起',
   (SELECT id FROM categories WHERE slug = 'ai-writing')),

  ('Copy.ai', 'copy-ai',
   'AI 写作助手，专注于营销文案生成，支持多种文案类型，操作简单，适合快速生成广告文案和邮件。',
   'https://www.copy.ai', 'freemium', '免费版2000词，Pro $49/月',
   (SELECT id FROM categories WHERE slug = 'ai-writing')),

  ('秘塔写作猫', 'xiezuocat',
   '秘塔科技推出的中文 AI 写作工具，擅长错别字检查、语法纠错、文章润色和内容续写，专为中文写作优化。',
   'https://xiezuocat.com', 'freemium', '免费版有限额，会员¥29/月起',
   (SELECT id FROM categories WHERE slug = 'ai-writing')),

  ('讯飞写作', 'iflytek-write',
   '科大讯飞推出的 AI 写作工具，基于星火大模型，支持多场景写作、语音输入和智能润色。',
   'https://turbosign.iflytek.com', 'freemium', '免费版可用，会员按需订阅',
   (SELECT id FROM categories WHERE slug = 'ai-writing')),

  -- AI 视频 (3)
  ('Sora', 'sora',
   'OpenAI 开发的视频生成模型，可以根据文本描述生成高质量、最长60秒的视频，支持复杂的场景和动作。',
   'https://openai.com/sora', 'paid', '需 ChatGPT Plus/Pro 订阅',
   (SELECT id FROM categories WHERE slug = 'ai-video')),

  ('Runway', 'runway',
   'AI 视频创作平台，提供 Gen-3 等先进视频生成模型，支持视频编辑、特效添加和文生视频功能。',
   'https://runwayml.com', 'freemium', '免费版有限额，Pro $35/月',
   (SELECT id FROM categories WHERE slug = 'ai-video')),

  ('Pika', 'pika',
   '专注于 AI 视频生成的平台，操作简单，支持文本转视频和图片转视频，适合快速生成短视频内容。',
   'https://pika.art', 'freemium', '免费版有限额，Pro $8/月起',
   (SELECT id FROM categories WHERE slug = 'ai-video')),

  -- AI 音频 (3)
  ('ElevenLabs', 'elevenlabs',
   'AI 语音合成平台，提供自然逼真的多语言语音生成，支持声音克隆、情感控制和专业配音。',
   'https://elevenlabs.io', 'freemium', '免费版10000字符，Pro $5/月起',
   (SELECT id FROM categories WHERE slug = 'ai-audio')),

  ('Suno', 'suno',
   'AI 音乐生成平台，可以根据文本描述生成完整歌曲，包括词曲、演唱和编曲，支持多种音乐风格。',
   'https://suno.ai', 'freemium', '免费版每日额度，Pro $10/月',
   (SELECT id FROM categories WHERE slug = 'ai-audio')),

  ('Udio', 'udio',
   'AI 音乐生成工具，支持高质量音乐创作，用户可自定义歌词、风格和情绪，快速生成定制化音乐作品。',
   'https://udio.com', 'freemium', '免费版可用，付费版更多额度',
   (SELECT id FROM categories WHERE slug = 'ai-audio'))

ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  website = EXCLUDED.website,
  pricing = EXCLUDED.pricing,
  pricing_note = EXCLUDED.pricing_note,
  category_id = EXCLUDED.category_id,
  updated_at = NOW();

-- =============================================
-- Step 4: Create RLS policies (Row Level Security)
-- =============================================

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Allow public read tools" ON tools FOR SELECT USING (true);
CREATE POLICY "Allow public read reviews" ON reviews FOR SELECT USING (true);

-- Allow authenticated inserts for reviews
CREATE POLICY "Allow authenticated insert reviews" ON reviews FOR INSERT WITH CHECK (true);

-- =============================================
-- Step 5: Create indexes
-- =============================================

CREATE INDEX IF NOT EXISTS idx_tools_category_id ON tools(category_id);
CREATE INDEX IF NOT EXISTS idx_tools_slug ON tools(slug);
CREATE INDEX IF NOT EXISTS idx_reviews_tool_id ON reviews(tool_id);

-- =============================================
-- Done
-- =============================================
