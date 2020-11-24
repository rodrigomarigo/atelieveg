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
              imageUrl: 'https://www.ibahia.com/fileadmin/user_upload/ibahia/2020/junho/02/coxinha.jpg',
              id: 1,
              linkUrl: 'shop/salgados'
            },
            {
              titulo: 'Doces',
              imageUrl: 'https://www.prazeresdamesa.com.br/wp-content/uploads/2018/05/brigadeiros-e1548337688943.jpg',
              id: 2,
              linkUrl: 'shop/doces'
            },
            {
              titulo: 'Bebidas',
              imageUrl: 'https://t2.rg.ltmcdn.com/pt/images/7/7/0/img_cappuccino_funcional_3077_600.jpg',
              id: 3,
              linkUrl: 'shop/bebidas'
            },
            {
              titulo: 'Congelados',
              imageUrl: 'https://img.cybercook.com.br/receitas/386/pizza-vegana-low-carb-2-623x350.jpeg',
              size: 'large',
              id: 4,
              linkUrl: 'shop/congelados'
            },
            {
              titulo: 'Faça você mesmo',
              imageUrl: 'https://www.oetker.com.br/Recipe/Recipes/oetker.com.br/br-pt/baking/image-thumb__67767__RecipeDetail/bolo-trufado-de-chocolate-com-avela.jpg',
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