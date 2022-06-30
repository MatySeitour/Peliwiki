import React from 'react';
import "./Categories.css"

function Categories({ children }) {
    return [
        <section className="categories">
            <h2 className="categories-title">CATEG<b>ORIES</b></h2>
            {children}
        </section>
    ]
}

export { Categories };