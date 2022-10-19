import React, { useEffect } from 'react';
import Specification from './Specification';

const IngredientesSpecification = () => {
    useEffect(() => {

    }, [])

    return (
        <div className = "vtex-specification-custom--container">
            <Specification tipoEspecificacion= {"Ingredientes"} />
        </div>
    );
}

export default IngredientesSpecification;