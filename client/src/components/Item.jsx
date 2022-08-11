import React from "react";
import Axios from "axios";

var onClickDelete = function (id) {
  return Axios({
    method: "put",
    url: "http://127.0.0.1:3000/items",
    data: {
      id: id,
    },
  })
    .then((res) => {
      console.log("Delete item request sent successfully: ", res);
    })
    .catch((err) => {
      console.log(err);
    });
};

function Item({ refresh, id, name, calories, protein }) {
  return (
    <tr>
      <td>{name} &nbsp;&nbsp; </td>
      <td>Calories (cal): {calories}</td>
      <td>Protein (g): {protein}</td>
      <td>
        <button
          type="button"
          onClick={() => {
            onClickDelete(id);
            refresh();
          }}
        >
          Delete Item
        </button>
      </td>
    </tr>
  );
}

export default Item;
