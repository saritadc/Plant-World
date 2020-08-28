import React from "react";
import {Link} from "react-scroll";

const ListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    selectedItem,
    onItemSelect,
  } = props;

  return (
    <div className="list-group item-category">
      
      {Array.isArray(items) && items.map((item) => (
        <div
          id="category"
          className="bucket"
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={item === selectedItem ? "bucket active" : "bucket"}
          style={{
            cursor: "pointer",
            backgroundImage: `url(${item.imageURL}`,
            backgroundSize: "cover"
          }}
        >
        <Link to="item" smooth={true} duration={1000}> {item[textProperty]}</Link>
        </div>
      ))}
    </div>
  );
};

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name",
};

export default ListGroup;
