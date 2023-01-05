import React, { useEffect } from "react";

const TextSearch = () => {
    useEffect(() => {
        let temp = document.querySelector(".vtex-store-components-3-x-infoCardHeadline--header-categorias-search div");
        const domConst = document.location;
        console.log("useeffect", document.location)
        if(temp && (domConst.search.indexOf("?_q=") != -1)) {
            const newText = domConst.pathname.slice(1).replace('%20', ' ').toUpperCase();
            temp.innerHTML = newText;
        }
    }, [document.location.href]);

    return (
        <>
        </>
    );
}

export default TextSearch;