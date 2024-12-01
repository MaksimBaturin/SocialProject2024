"use client";

import { useState } from 'react';

export function ImageBlock({ src, alt }) {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleImageClick = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div className={`image-block ${isFullScreen ? 'full-screen' : ''} content`} onClick={handleImageClick}>
            <img src={src} alt={alt} />
        </div>
    );
}