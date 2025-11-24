import * as React from 'react';

const SVGComponent = ({
    color = '#33E99C', // Default color
    size = 36, // Default size
}: {
    color?: string;
    size?: number;
} & React.SVGProps<SVGSVGElement>) => (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
        <path d="M30.7048 3.00021H5.29484C5.00921 2.99624 ... (rest of path)" fill={color} />
    </svg>
);

export default SVGComponent;
