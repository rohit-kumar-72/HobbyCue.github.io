import React from 'react';

function Card({ icon, title, description, buttonText, color, width, isLoggedIn = false }) {
    return (
        <div
            className={`group ${color && ("hover:text-white")} bg-white lg:px-11 px-[24px] py-[26px] lg:py-10 border border-line rounded-lg flex-1 relative`}
            style={{ '--hover-bg-color': color || 'white' }}
        >
            <div className="flex justify-center lg:justify-start gap-3 items-center mb-7">
                <img src={icon} alt="" />
                <h3 className='text-2xl font-semibold'>{title}</h3>
            </div>
            <div className={`text-center lg:text-left text-lg font-light mb-8 ${width ? '' : 'max-w-[520px]'}`}>{description}</div>
            {!isLoggedIn &&
                <div className="text-center lg:max-w-fit border border-purple text-purple text-sm font-semibold px-11 py-3 rounded-lg">{buttonText}</div>
            }
            <style jsx>{`
                .group:hover {
                    background-color: var(--hover-bg-color);
                    transition: background-color 0.3s;
                }
            `}</style>
        </div>
    );
}

export default Card;
