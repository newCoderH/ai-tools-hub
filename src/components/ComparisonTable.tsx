interface Tool {
  name: string;
  slug: string;
  description?: string;
  website?: string;
  pricing: string;
  pricingNote?: string;
  rating?: number;
  features: string[];
}

interface ComparisonTableProps {
  tools: Tool[];
  features: string[];
}

function CheckIcon() {
  return (
    <svg className="mx-auto size-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="mx-auto size-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function ComparisonTable({ tools, features }: ComparisonTableProps) {
  if (tools.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50 py-16 text-center dark:border-zinc-700 dark:bg-zinc-900">
        <div className="text-4xl opacity-30">🔍</div>
        <p className="mt-4 text-zinc-500 dark:text-zinc-400">
          请在上方选择两个工具进行对比
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
      <table className="w-full min-w-[600px] divide-y divide-zinc-200 text-sm dark:divide-zinc-800">
        <thead>
          <tr className="bg-zinc-50 dark:bg-zinc-900">
            <th className="px-6 py-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">
              对比项
            </th>
            {tools.map((tool) => (
              <th
                key={tool.slug}
                className="px-6 py-4 text-left font-semibold text-zinc-900 dark:text-zinc-100"
              >
                <div className="flex flex-col gap-1">
                  <span>{tool.name}</span>
                  {tool.rating && (
                    <span className="text-xs font-normal text-yellow-600 dark:text-yellow-400">
                      ⭐ {tool.rating.toFixed(1)}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
          <tr>
            <td className="px-6 py-4 font-medium text-zinc-700 dark:text-zinc-300">
              定价
            </td>
            {tools.map((tool) => (
              <td key={tool.slug} className="px-6 py-4">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  {tool.pricing}
                </span>
                {tool.pricingNote && (
                  <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                    {tool.pricingNote}
                  </p>
                )}
              </td>
            ))}
          </tr>
          {features.map((feature) => (
            <tr key={feature} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
              <td className="px-6 py-4 font-medium text-zinc-700 dark:text-zinc-300">
                {feature}
              </td>
              {tools.map((tool) => (
                <td key={tool.slug} className="px-6 py-4 text-center">
                  {tool.features.includes(feature) ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/50 dark:text-green-400">
                      <CheckIcon />
                      支持
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500">
                      <CrossIcon />
                      不支持
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
