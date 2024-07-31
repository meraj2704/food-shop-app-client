import React from 'react';
interface HeaderProps {
    header: string;
}
const HeaderTag = ({header}:HeaderProps) => {
    return (
        <div className="bg-bgGradient py-2 px-4 rounded-3xl">
          <p className="text-base text-primary">{header}</p>
        </div>
    );
};

export default HeaderTag;