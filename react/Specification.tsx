import React, { FC, useEffect, useState } from 'react';
import { useProduct } from 'vtex.product-context'
import { AppKey, AppToken } from './keys'

interface specificationProps {
    tipoEspecificacion: String,
}

const Specification: FC<specificationProps> = ({ tipoEspecificacion }) => {
    const productContextValue = useProduct()
    const [prodSpecification, setProdSpecification] = useState("");
    
    const getContext = async () => {
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-VTEX-API-AppKey': AppKey,
            'X-VTEX-API-AppToken': AppToken,
          },
        }
        const url = `/api/catalog_system/pvt/products/${productContextValue.selectedItem.itemId}/specification`
        const res = await fetch(url, options)
        let resJson = await res.json();
        console.log(resJson);
        for(let i = 0; i < resJson.length; i++) {
            if ( resJson[i].Name === tipoEspecificacion ) {
                setProdSpecification(resJson[i].Value[0]);
            }
        }
    }

    useEffect(() => {
        getContext();
    }, [productContextValue])

    return (
        <div className = "vtex-store-components-3-x-content">
            {prodSpecification}
        </div>
    );
}

export default Specification;