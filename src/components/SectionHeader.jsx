import React from 'react';

function SectionHeader({title, desc}) {
    return <div className="section-header">
        <span className="text-primary">Practice Advice</span>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
}

export default SectionHeader;