import { useNutrientTable, Nutrient } from "../context/NutrientTableContext";

const NO_DV = [
  "Calories",
  "Trans/Trans",
  "Carbohydrate/Glucides",
  "Protein/Protéines",
  "Cholesterol/Cholestérol",
];
const NutrientTable = () => {
  const { getRoundedAmt, nutrients, setNutrients } =
    useNutrientTable();

  const getDV = (name: string, value: number, dailyValue: number) => {
    const dv =
      Math.round(((getRoundedAmt(name, value) / dailyValue) * 100) / 1) * 1;
    return { dv };
  };

  const handleAmountChangeWithDV = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const nutrient = nutrients.find((nutrient: Nutrient) => nutrient.id === id);
    if (nutrient) {
      const dv = getDV(nutrient.name, Number(value), nutrient.dailyValue || 0);
      const updatedNutrient = { ...nutrient, [name]: Number(value), ...dv };
      const updatedNutrients = nutrients.map((nutrient:Nutrient) =>
        nutrient.id === id ? updatedNutrient : nutrient
      );
      setNutrients(updatedNutrients);
    }
  };

  return (
    <table className="mb-4">
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
                name="amount"
                placeholder={nutrient.placeholderAmount}
                value={nutrient.amount}
                onChange={(event) =>
                  handleAmountChangeWithDV(nutrient.id, event)
                }
              />
            </td>
            <td>{getRoundedAmt(nutrient.name, nutrient.amount)}</td>
            <td className="w-36">{nutrient.name}</td>
            {!NO_DV.includes(nutrient.name) && (
              <td className="w-16">{nutrient.dv || ""}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NutrientTable;
