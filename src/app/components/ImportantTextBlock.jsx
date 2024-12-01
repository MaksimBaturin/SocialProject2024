export function ImportantTextBlock({ paragraphs }) {
    return (
        <div className="important-text-block content">
            {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
}