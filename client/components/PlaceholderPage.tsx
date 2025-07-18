interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-webtoon-gray flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-webtoon-text mb-4">{title}</h1>
        <p className="text-webtoon-text/70 mb-6">{description}</p>
        <p className="text-sm text-webtoon-text/50">
          This page is not yet implemented. Continue prompting to add content
          here.
        </p>
      </div>
    </div>
  );
}
