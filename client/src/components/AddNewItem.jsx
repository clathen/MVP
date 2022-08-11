import React, { useRef, useState, useEffect } from "react";
import Axios from "axios";

function AddNewItem({ refresh }) {
  const [addItemName, setAddItemName] = useState("");
  const [addItemCalories, setAddItemCalories] = useState("");
  const [addItemProtein, setAddItemProtein] = useState("");
  function onClickAdd() {
    return Axios({
      method: "post",
      url: "/items",
      data: {
        name: addItemName,
        calories: addItemCalories,
        protein: addItemProtein,
      },
    })
      .then((res) => {
        console.log("Add item request sent successfully", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <h2>Add new Item</h2>
      <table>
        <tr>
          <td>Item Name:</td>
          <td>
            <input
              type="text"
              placeholder="Enter item's name"
              value={addItemName}
              onChange={(e) => {
                setAddItemName(e.currentTarget.value);
              }}
            ></input>
          </td>
        </tr>
        <tr>
          <td>Calories (cal):</td>
          <td>
            <input
              type="text"
              placeholder="Enter item's calories"
              value={addItemCalories}
              onChange={(e) => {
                setAddItemCalories(e.currentTarget.value);
              }}
            ></input>
          </td>
        </tr>
        <tr>
          <td>Protein (g):</td>
          <td>
            <input
              type="text"
              placeholder="Enter item's protein"
              value={addItemProtein}
              onChange={(e) => {
                setAddItemProtein(e.currentTarget.value);
              }}
            ></input>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button
              type="button"
              onClick={() => {
                onClickAdd();
                setAddItemName("");
                setAddItemCalories("");
                setAddItemProtein("");
                refresh();
              }}
            >
              Add Item
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default AddNewItem;
