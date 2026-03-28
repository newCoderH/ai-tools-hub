interface Tool {
  name: string;
  slug: string;
  pricing: string;
  rating: number;
  features: string[];
}

interface ComparisonTableProps {
  tools: Tool[];
  features: string[];
}

export default function ComparisonTable({ tools, features }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="border p-3 text-left font-medium dark:border-zinc-700">Feature</th>
            {tools.map((tool) => (
              <th key={tool.slug} className="border p-3 text-left font-medium dark:border-zinc-700">
                {tool.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-3 dark:border-zinc-700">Pricing</td>
            {tools.map((tool) => (
              <td key={tool.slug} className="border p-3 dark:border-zinc-700">
                {tool.pricing}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border p-3 dark:border-zinc-700">Rating</td>
            {tools.map((tool) => (
              <td key={tool.slug} className="border p-3 dark:border-zinc-700">
                {tool.rating}/5
              </td>
            ))}
          </tr>
          {features.map((feature) => (
            <tr key={feature}>
              <td className="border p-3 dark:border-zinc-700">{feature}</td>
              {tools.map((tool) => (
                <td key={tool.slug} className="border p-3 text-center dark:border-zinc-700">
                  {tool.features.includes(feature) ? "Yes" : "No"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
