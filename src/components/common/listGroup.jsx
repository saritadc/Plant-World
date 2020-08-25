import React from "react";

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
      {items.map((item) => (
        <div className="bucket category-img"
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={
            item === selectedItem ? "bucket active" : "bucket"
          }
          style={{ cursor: "pointer" }}
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
