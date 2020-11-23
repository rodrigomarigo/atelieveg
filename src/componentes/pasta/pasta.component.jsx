import React from 'react'

import ItemMenu from '../item-menu/item-menu.component'

import './pasta.style.scss'

class Pasta extends React.Component{
    constructor(){
        super();

        this.state = {
            secoes: [
                {
                  titulo: 'Salgados',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/salgados'
                },
                {
                  titulo: 'Doces',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/doces'
                },
                {
                  titulo: 'Bebidas',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/bebidas'
                },
                {
                  titulo: 'Congelados',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/congelados'
                },
                {
                  titulo: 'Faça você mesmo',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/facavcmsm'
                }
              ]
        }
    }
    render(){
        return (
            <div className = 'pasta-menu'>
                {
                    this.state.secoes.map(({id, ...otherSectionProps }) => (
                        <ItemMenu key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
};

export default Pasta;