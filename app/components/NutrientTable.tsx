"use client";
import { useNutrientTable, Nutrient } from "../context/NutrientTableContext";

const NutrientTable = () => {

  const {getRoundedAmt, nutrients, handleAmountChange} = useNutrientTable();
  const getDV = (name: string, value: number, dailyValue: number) => {
    return Math.round((getRoundedAmt(name, value)/dailyValue*100) / 1) * 1;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Unit of Measure (um)</th>
          <th>Nutrient Amount **</th>
          <th>Rounded Amount</th>
          <th>Nutrient</th>
          <th>%DV</th>
        </tr>
      </thead>
      <tbody>
        {nutrients.map((nutrient: Nutrient) => (
          <tr key={nutrient.id} className="text-center">
            <td>{nutrient.uom}</td>
            <td className="px-2 py-1">
              <input
                className="text-center"
                type="number"
                step="0.01"
                value={nutrient.amount}
                onChange={(event) => handleAmountChange(nutrient.id, event)}
              />
            </td>
            <td>
              {getRoundedAmt(nutrient.name, nutrient.amount)}
            </td>
            <td className="w-36">{nutrient.name}</td>
            <td className="w-16">{nutrient.dailyValue? getDV(nutrient.name, nutrient.amount, nutrient.dailyValue) : ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NutrientTable;
