import React, { useRef, useState, useEffect, useContext } from "react";
import AddNewItem from "./components/AddNewItem.jsx";
import Header from "./components/Header.jsx";
import NutritionTotals from "./components/NutritionTotals.jsx";
import TrackedItems from "./components/TrackedItems.jsx";
import Axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  const refresh = () => {
    Axios({
      method: "get",
      url: "http://127.0.0.1:3000/items",
    }).then((res) => {
      setItems(res.data);
    });
  };

  useEffect(refresh, []);

  return (
    <div>
      <Header />
      <NutritionTotals items={items} />
      <AddNewItem refresh={refresh} />
      <TrackedItems items={items} refresh={refresh} />
    </div>
  );
}

export default App;
