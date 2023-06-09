import { createContext, useState, useContext } from "react";

export type Nutrient = {
  id: number;
  uom: string;
  amount?: number;
  placeholderAmount: number;
  name: string;
  dailyValue?: number;
  dv?: number;
};

export type NutrientTableContextType = {
  nutrients: Nutrient[];
  setNutrients: React.Dispatch<React.SetStateAction<Nutrient[]>>;
  handleAmountChange: (id: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  getRoundedAmt: (name: string, value: number) => number;
};

export const NutrientTableContext = createContext<NutrientTableContextType>({
  nutrients: [],
  setNutrients: () => {},
  handleAmountChange: () => {},
  getRoundedAmt: () => 0,
});

export const NutrientTableProvider = ({ children }: { children: React.ReactNode }) => {
  const [nutrients, setNutrients] = useState([
    { id: 1, uom: "kcal", placeholderAmount: 200.00, name: "Calories", roundedAmt: 0 },
    {
      id: 2,
      uom: "g",
      placeholderAmount: 10.00,
      name: "Fat/Lipides",
      dailyValue: 75,
    },
    {
      id: 3,
      uom: "g",
      placeholderAmount: 5.00,
      name: "Saturated/Saturé",
      dailyValue: 20,
    },
    { id: 4, uom: "g", placeholderAmount: 0.00, name: "Trans/Trans" },
    { id: 5, uom: "g", placeholderAmount: 30.00, name: "Carbohydrate/Glucides" },
    {
      id: 6,
      uom: "g",
      placeholderAmount: 5.00,
      name: "Fibre/Fibres",
      dailyValue: 28,
    },
    {
      id: 7,
      uom: "g",
      placeholderAmount: 20.00,
      name: "Sugars/Sucres",
      dailyValue: 100,
    },
    { id: 8, uom: "g", placeholderAmount: 25.00, name: "Protein/Protéines" },
    {
      id: 9,
      uom: "mg",
      placeholderAmount: 15.00,
      name: "Cholesterol/Cholestérol",
    },
    {
      id: 10,
      uom: "mg",
      placeholderAmount: 300.00,
      name: "Sodium",
      dailyValue: 2300,
    },
    {
      id: 11,
      uom: "mg",
      placeholderAmount: 500.00,
      name: "Potassium",
      dailyValue: 3400,
    },
    {
      id: 12,
      uom: "mg",
      placeholderAmount: 100.00,
      name: "Calcium",
      dailyValue: 1300,
    },
    {
      id: 13,
      uom: "mg",
      placeholderAmount: 2.00,
      name: "Iron/Fer",
      dailyValue: 18,
    },
  ]);

  const handleAmountChange = (id: number, event: any) => {
    const newNutrients = nutrients.map((nutrient) => {
      if (nutrient.id === id) {
        return { ...nutrient, amount: event.target.value };
      }
      return nutrient;
    });
    setNutrients(newNutrients);
  };

  const getRoundedAmt = (name: string, value: number) => {
    switch (name) {
      case "Calories":
        if (value < 5 || (value >= 5 && value <= 50)) {
          return Math.round(value / 5) * 5;
        } else if (value > 50) {
          return Math.round(value / 10) * 10;
        }
      case "Fat/Lipides":
      case "Saturated/Saturé":
      case "Trans/Trans":
        if (value < 0.5) {
          return Math.round(value / 0.1) * 0.1;
        } else if (value >= 0.5 && value <= 5) {
          return Math.round(value / 0.5) * 0.5;
        } else if (value > 5) {
          return Math.round(value / 1) * 1;
        }
      case "Carbohydrate/Glucides":
      case "Fibre/Fibres":
      case "Sugars/Sucres":
        if (value < 0.5) {
          return 0;
        } else if (value >= 0.5) {
          return Math.round(value / 1) * 1;
        }
      case "Protein/Protéines":
        if (value < 0.5) {
          return Math.round(value / 0.1) * 0.1;
        } else if (value >= 0.5) {
          return Math.round(value / 1) * 1;
        }
      case "Cholesterol/Cholestérol":
        return Math.round(value / 5) * 5;
      case "Sodium":
        if (value < 5) {
          return Math.round(value / 1) * 1;
        } else if (value >= 5 && value <= 140) {
          return Math.round(value / 5) * 5;
        } else {
          return Math.round(value / 10) * 10;
        }
      case "Potassium":
      case "Calcium":
        if (value < 5) {
          return 0;
        } else if (value >= 5 && value < 50) {
          return Math.round(value / 10) * 10;
        } else if (value >= 50 && value < 250) {
          return Math.round(value / 25) * 25;
        } else if (value >= 250) {
          return Math.round(value / 50) * 50;
        }
      case "Iron/Fer":
        if (value < 0.05) {
          return 0;
        } else if (value >= 0.05 && value < 0.5) {
          return Math.round(value / 0.1) * 0.1;
        } else if (value >= 0.5 && value < 2.5) {
          return Math.round(value / 0.25) * 0.25;
        } else {
          return Math.round(value / 0.5) * 0.5;
        }
      default:
        return value;
    }
  };

  return (
    <NutrientTableContext.Provider
      value={{ nutrients, setNutrients, handleAmountChange, getRoundedAmt }}
    >
      {children}
    </NutrientTableContext.Provider>
  );
};

export const useNutrientTable = () => {
  return useContext(NutrientTableContext);
};
