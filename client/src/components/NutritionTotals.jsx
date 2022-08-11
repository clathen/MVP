import React from "react";

function NutritionTotals({ items }) {
  var totalCalories = 0;
  var totalProtein = 0;

  for (var i = 0; i < items.length; i++) {
    totalCalories += items[i].calories;
    totalProtein += items[i].protein;
  }

  return (
    <div>
      <h2>Nutritional Totals:</h2>
      <table>
        <tr>
          <td>Total Calories (cal):</td>
          <td>{totalCalories}</td>
        </tr>
        <tr>
          <td>Total Protein (g):</td>
          <td>{totalProtein}</td>
        </tr>
      </table>
    </div>
  );
}

export default NutritionTotals;
