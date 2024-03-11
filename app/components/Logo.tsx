import React from 'react';

const Logo = ({ className }: { className?: string }) => {
    return (
        <h2 className={`font-bold text-black ${className}`}>
            ca<span className="text-[#e0752b]">KOL</span>
        </h2>
    );
};

export default Logo;
