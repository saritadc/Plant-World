import React from "react";

const ListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    imageURL,
    selectedItem,
    onItemSelect,
  } = props;

  return (
    <div className="list-group item-category">
      
      {Array.isArray(items) && items.map((item) => (
        <div
          className="bucket"
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={item === selectedItem ? "bucket active" : "bucket"}
          style={{
            cursor: "pointer",
            backgroundImage: `url(${item[imageURL]}`,
          }}
        >
          {item[textProperty]}
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
