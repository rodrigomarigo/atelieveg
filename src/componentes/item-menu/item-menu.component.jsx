import React from 'react';
import { withRouter } from 'react-router-dom';

import './item-menu.style.scss'

const ItemMenu = ({ titulo, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} item-menu`} 
    onClick={()=> history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(ItemMenu);