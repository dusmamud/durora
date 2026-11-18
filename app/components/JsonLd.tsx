/** Renders one JSON-LD script block. Pages include it only when the
 * page's content matches the markup (event pages get MusicEvent;
 * /terms, /privacy, /contact, /faq get none). */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
