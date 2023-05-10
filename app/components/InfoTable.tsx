import React from "react";
import { useInfoTable } from "../context/InfoTableContext";

const InfoTable = () => {
  const { data, setData } = useInfoTable();

  const handleInputChange = (event: any, rowIndex: string, fieldName: string) => {
    const newValue = event.target.value;
    setData((prevData) => {
      const newData = { ...prevData };
      newData[rowIndex] = {
        ...newData[rowIndex],
        [fieldName]: newValue,
      };
      return newData;
    });
  };

  return (
    <table className="mb-4">
      <thead>
        <tr>
          <th>Unit of Measure (um)</th>
          <th>Add Information</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((key) => {
          const row = data[key];
          return (
            <tr key={key} className="text-center">
              <td className="w-[15rem] p-2">{row.uom}</td>
              <td className="px-2">
                {key === "englishMeasure" || key === "frenchMeasure" ? (
                  <textarea
                    className="text-left resize-none w-full px-2"
                    value={row.addInfo}
                    onChange={(event) =>
                      handleInputChange(event, key, "addInfo")
                    }
                  />
                ) : (
                  <input
                    type="number"
                    className="text-center"
                    value={row.addInfo}
                    onChange={(event) =>
                      handleInputChange(event, key, "addInfo")
                    }
                  />
                )}
              </td>
              <td className="w-72">{row.comments}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InfoTable;
