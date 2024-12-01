import Link from 'next/link';

export function TopicNavigation({ prevTopic, nextTopic }) {
    return (
        <div className="topic-navigation">
            {prevTopic && (
                <Link href={prevTopic}>
                    <button>Предыдущая тема</button>
                </Link>
            )}
            {nextTopic && (
                <Link href={nextTopic}>
                    <button>Следующая тема</button>
                </Link>
            )}
        </div>
    );
}