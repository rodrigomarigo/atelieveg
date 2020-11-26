import React from 'react'

import ItemMenu from '../item-menu/item-menu.component'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { } from '../../redux/directory/directory.reducer';

import './pasta.style.scss'
import { selectDirectorySections } from '../../redux/directory/directory.selector';

const Pasta = ({ secoes }) => (
  <div className = 'pasta-menu'>
      {
          secoes.map(({id, ...otherSectionProps }) => (
              <ItemMenu key={id} {...otherSectionProps} />
          ))
      }
  </div>

);

const mapStateToProps = createStructuredSelector({
  secoes: selectDirectorySections
})
export default connect(mapStateToProps)(Pasta);