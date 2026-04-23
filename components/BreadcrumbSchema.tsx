interface BreadcrumbItem {
  name: string;
  href: string;
}

interface Props {
  items: BreadcrumbItem[];
}

/**
 * Renders both a visual breadcrumb nav and a BreadcrumbList JSON-LD block.
 * Place near the top of every sub-page (not homepages).
 */
export default function BreadcrumbSchema({ items }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://birthfacts.net${item.href}`,
    })),
  };

  return (
    <>
      {/* Visual breadcrumb */}
      <nav aria-label="breadcrumb" className="max-w-3xl mx-auto px-4 pt-4 pb-0">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--muted)]">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden="true">›</span>}
                {isLast ? (
                  <span className="text-[var(--text)]" aria-current="page">{item.name}</span>
                ) : (
                  <a href={item.href} className="hover:text-[var(--accent)] transition-colors">
                    {item.name}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
