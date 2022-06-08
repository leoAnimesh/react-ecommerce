import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../Redux/Shop/ShopSelector';
import PreviewCollection from '../PreviewCollection/PreviewCollection';
import './CollectionOverview.scss';

const CollectionOverview = ({ Collections }) => {
  return (
    <div className="collection-overview">
      {Collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  Collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
