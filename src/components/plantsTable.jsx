import React from 'react';
import Like from "./common/like";


const PlantsTable = (props) => {
  const {plants, onLike}  = props
  return (
    <div className="item-category">
      {plants.map((plant) => (
        <div
          id="item"
          className="bucket"
          key={plant._id}
          style={{
            backgroundImage: `url(${plant.imageURL}`,
            backgroundSize: "cover",
          }}
        >
          <h4>{plant.title}</h4>
          <h5>{plant.category.name}</h5>
          <div>
            <Like liked={plant.liked} onLikeToggle={() => onLike(plant)} />
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default PlantsTable;