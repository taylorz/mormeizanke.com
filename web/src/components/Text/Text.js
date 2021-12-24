import React from 'react';
import './Text.scss'

const Text = ({ className, children, headline, italic, p, inline }) => (
    <p className={`
        text
        ${className && className}
        ${headline && "headline"}
        ${italic && "italic"}
        ${p && "paragraph"}
        ${inline && "inline"}
    `}>
        {children}
    </p>
)

export default Text