
import React, { useEffect } from 'react';

const RemoveCards = () => {
    useEffect(() => {
        remove();
    });

    const remove = () => {
        let banners;
        banners = document.querySelectorAll('.vtex-rich-text-0-x-paragraph--bannerText');
        let cards;
        cards = document.querySelectorAll('.vtex-rich-text-0-x-link--texto');
        for( let i = 0; i < banners.length; i++ ) {
            if( banners[i].innerHTML === "00.00.0000" ) {
                banners[i].parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentElement?.remove();
            }
            else {
                let x = banners[i].parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentElement as HTMLElement;
                x.style.display = "flex";
            }
        }
        for( let i = 0; i < cards.length; i++ ) {
            if( cards[i].innerHTML === "00.00.0000" ) {
                cards[i].parentNode?.parentNode?.parentNode?.parentNode?.parentElement?.remove();
            }
            else {
                let x = cards[i].parentNode?.parentNode?.parentNode?.parentNode?.parentElement as HTMLElement;
                x.style.display = "flex";
            }
        }
    }

    return (
        <>
        </>
    );
}

export default RemoveCards;
