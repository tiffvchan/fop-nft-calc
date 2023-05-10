import React, { createContext, useContext, useState } from "react";

interface InfoTableContextType {
  data: {
    [key: string]: {
      uom: string;
      addInfo: string | number;
      comments: string;
    }
  };
  setData: React.Dispatch<React.SetStateAction<{
    [key: string]: {
      uom: string;
      addInfo: string | number;
      comments: string;
    }
  }>>;

}

export const InfoTableContext = createContext<InfoTableContextType>({
  data: {},
  setData: () => {},
});

export const InfoTableProvider = ({ children }: {children: React.ReactNode}) => {
  const [data, setData] = useState<{
    [key: string]: {
      uom: string;
      addInfo: string | number;
      comments: string;
    }
  }>({
    "englishMeasure": {
      uom: "Household measure and Metric measure for NFt",
      addInfo: 'Per "add Serving size (English)"',
      comments: "Serving size - English (HH and MM)* for NFt",
    },
    "frenchMeasure": {
      uom: "Household measure and Metric measure for NFt",
      addInfo: 'Pour "add Serving size (French)"',
      comments: "Serving size - French (HH and MM)* for NFt",
    },
    "refAmt": {
      uom: "g/ml",
      addInfo: 200,
      comments:
        "Reference amount (RA). Note: For main dishes use*. Click on link below for Table of RA for foods",
    },
    "fopAmt": {
      uom: "g",
      addInfo: 40,
      comments:
        "For FOP: Use Reference amount or serving size whichever is greater. For NFt: Use serving size.",
    },
    "refAmtLg": {
      uom: "g",
      addInfo: 0,
      comments: "*Main dishes with reference amt of ≥200 g",
    },
  });

  return (
    <InfoTableContext.Provider value={{ data, setData }}>
      {children}
    </InfoTableContext.Provider>
  );
};

export const useInfoTable = () => {
  return useContext(InfoTableContext);
};

export default InfoTableProvider;
