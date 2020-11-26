import React from 'react';
import CollectionsOverview from '../../componentes/collections-overview/collection-overview.component.jsx'
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component.jsx';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default ShopPage