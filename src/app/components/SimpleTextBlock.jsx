export function SimpleTextBlock({ paragraphs }) {
    return (
        <div className="simple-text-block content">
            {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
}