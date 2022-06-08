import "./Directory.scss";
import Menu from "../Menu/Menu";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../Redux/Directory/DirectorySelector";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...othersectionProp }) => (
        <Menu key={id} {...othersectionProp} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
