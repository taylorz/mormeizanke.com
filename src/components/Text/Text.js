import React from 'react';
import './Text.scss'

const Text = ({ children, headline, soft }) => (
    <p className={`
        text
        ${headline && "headline"}
        ${soft && "soft"}
    `}>
        {children}
    </p>
)

export default Text