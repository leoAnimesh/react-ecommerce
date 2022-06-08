import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview.js';
import CollectionPage from '../Collection/CollectionPage.js';
import { Route } from 'react-router-dom';
import './ShopPage.scss';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
