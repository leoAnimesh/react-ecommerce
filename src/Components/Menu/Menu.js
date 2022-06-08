import "./Menu.scss";
import {withRouter} from 'react-router-dom';

const Menu = ({ title, imageUrl, size , linkUrl, history , match }) => {

  const menuStyle = {
    background: `url(${imageUrl})`,
  }

  return (
    <>
      <div className={`${size} menu-item`}>
        <div className="background-image" style={menuStyle}></div>
        <div className="content" onClick={()=>history.push(`${match.url}${linkUrl}`)}>
          <h1 className="title">{title}</h1>
          <span className="subTitle">SHOP NOW</span>
        </div>
      </div>
    </>
  );
  
};

export default withRouter(Menu);
