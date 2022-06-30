import React from 'react';
import "./CategoryContainer.css"

function CategoryContainer({ children }) {
    return [
        <article className='category'>
            {children}
        </article>
    ]
}

export { CategoryContainer };