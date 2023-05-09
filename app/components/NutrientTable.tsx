"use client";
import { useState } from "react";

const NutrientTableCell = ({children}: any) => {

  return (
    <td className="px-2">{children}</td>
  )
}

const NutrientTable = () => {
  const [nutrients, setNutrients] = useState([
    { id: 1, uom: "kcal", amount: "200.00", name: "Calories", dv: "10%" },
    { id: 2, uom: "g", amount: "10.00", name: "Fat", dv: "15%" },
    { id: 3, uom: "g", amount: "5.00", name: "Saturated", dv: "25%" },
    { id: 4, uom: "g", amount: "0.00", name: "Trans", dv: "0%" },
    { id: 5, uom: "g", amount: "30.00", name: "Carbohydrate", dv: "10%" },
    { id: 6, uom: "g", amount: "5.00", name: "Fibre", dv: "20%" },
    { id: 7, uom: "g", amount: "20.00", name: "Sugars", dv: "30%" },
    { id: 8, uom: "g", amount: "25.00", name: "Protein", dv: "50%" },
    { id: 9, uom: "mg", amount: "15.00", name: "Cholesterol", dv: "5%" },
    { id: 10, uom: "mg", amount: "300.00", name: "Sodium", dv: "15%" },
    { id: 11, uom: "mg", amount: "500.00", name: "Potassium", dv: "20%" },
    { id: 12, uom: "mg", amount: "100.00", name: "Calcium", dv: "10%" },
    { id: 13, uom: "mg", amount: "2.00", name: "Iron", dv: "15%" },
  ]);

  const handleAmountChange = (id, event: any) => {
    const newNutrients = nutrients.map((nutrient) => {
      if (nutrient.id === id) {
        return { ...nutrient, amount: event.target.value };
      }
      return nutrient;
    });
    setNutrients(newNutrients);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Unit of Measure (um)</th>
          <th>Nutrient Amount **</th>
          <th>Nutrient</th>
          <th>%DV</th>
        </tr>
      </thead>
      <tbody>
        {nutrients.map((nutrient) => (
          <tr key={nutrient.id} className="text-center">
            <td>{nutrient.uom}</td>
            <td className="px-2 py-1">
              <input
                className= "text-center"
                type="number"
                step="0.01"
                value={nutrient.amount}
                onChange={(event) => handleAmountChange(nutrient.id, event)}
              />
            </td>
            <td className="w-36">{nutrient.name}</td>
            <td className="w-16">{nutrient.dv}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NutrientTable;
