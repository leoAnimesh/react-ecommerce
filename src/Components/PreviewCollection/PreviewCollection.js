import "./PreviewCollection.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

const PreviewCollection = ({ title, items, match }) => {
  return (
    <div className="PreviewCollection">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
