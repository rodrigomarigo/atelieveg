import React from 'react';

import './item-menu.style.scss'

const ItemMenu = ({ titulo, imageUrl, size }) => (
    <div className={`${size} item-menu`}>
        <div 
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        >
        </div>
        <div className = 'conteudo'>
            <h1 className = 'titulo'>{ titulo.toUpperCase() }</h1>
            <span className = 'subtitulo'>Compre agora!</span>
        </div>
    </div>
);

export default ItemMenu;