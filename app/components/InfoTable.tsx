import React, { useState } from "react";

const InfoTable = () => {
  const [data, setData] = useState([
    {
      uom: "Household measure and Metric measure for NFt",
      addInfo: 'Per "add Serving size (English)"',
      comments: "Serving size - English (HH and MM)* for NFt",
    },
    {
      uom: "Household measure and Metric measure for NFt",
      addInfo: 'Pour "add Serving size (French)"',
      comments: "Serving size - French (HH and MM)* for NFt",
    },
    {
      uom: "g/ml",
      addInfo: 200,
      comments:
        "Reference amount (RA). Note: For main dishes use*. Click on link below for Table of RA for foods",
    },
    {
      uom: "g",
      addInfo: 40,
      comments:
        "For FOP: Use Reference amount or serving size whichever is greater. For NFt: Use serving size.",
    },
    {
      uom: "g",
      addInfo: 0,
      comments: "*Main dishes with reference amt of ≥200 g",
    },
  ]);

  const handleInputChange = (
    event: any,
    rowIndex: number,
    fieldName: string
  ) => {
    const newValue = event.target.value;
    setData((prevData) => {
      const newData = [...prevData];
      newData[rowIndex] = {
        ...newData[rowIndex],
        [fieldName]: newValue,
      };
      return newData;
    });
  };

  return (
    <table className="mb-4 ml-2">
      <thead>
        <tr>
          <th>Unit of Measure (um)</th>
          <th>Add Information</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="text-center">
            <td className="w-[15rem] p-2">{row.uom}</td>
            <td className="px-2">
              {typeof row.addInfo === "string" ? (
                <textarea
                  className="text-left resize-none w-full px-2"
                  value={row.addInfo}
                  onChange={(event) =>
                    handleInputChange(event, rowIndex, "addInfo")
                  }
                />
              ) : (
                <input
                  type="number"
                  className="text-center"
                  value={row.addInfo}
                  onChange={(event) =>
                    handleInputChange(event, rowIndex, "addInfo")
                  }
                />
              )}
            </td>
            <td className="w-72">{row.comments}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InfoTable;
