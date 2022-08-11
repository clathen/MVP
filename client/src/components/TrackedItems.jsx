import Item from "./Item.jsx";
import React from "react";

function TrackedItems({ items, refresh }) {
  return (
    <div>
      <h2>Tracked Items:</h2>
      <table>
        {items.map((item) => {
          return (
            <Item
              refresh={refresh}
              id={item.id}
              name={item.name}
              calories={item.calories}
              protein={item.protein}
            />
          );
        })}
      </table>
    </div>
  );
}

export default TrackedItems;
