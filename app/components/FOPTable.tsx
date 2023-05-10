import React from "react";
import { useInfoTable } from "../context/InfoTableContext";
import { useNutrientTable } from "../context/NutrientTableContext";

const FOPTable = () => {
  const { data } = useInfoTable();
  const { nutrients } = useNutrientTable();

  

  const isHighIn = () => {

  };

  return (
    <>
      <h3 className="font-bold">Information for FOP</h3>
      <table className="w-80">
        <thead>
          <tr>
            <th>Categories</th>
            <th>≤30 g/ml (≥10% DV)</th>
            <th>{`>30 g/ml (≥15% DV)`}</th>
            <th>≥200 g (meal) (≥30% DV)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Saturated Fat</td>
            <td>{/* Placeholder for calculated value */}</td>
            <td>{/* Placeholder for calculated value */}</td>
            <td>{/* Placeholder for calculated value */}</td>
          </tr>
          <tr>
            <td>Sugar</td>
            <td>{/* Placeholder for calculated value */}</td>
            <td>{/* Placeholder for calculated value */}</td>
            <td>{/* Placeholder for calculated value */}</td>
          </tr>
          <tr>
            <td>Sodium</td>
            <td>{/* Placeholder for calculated value */}</td>
            <td>{/* Placeholder for calculated value */}</td>
            <td>{/* Placeholder for calculated value */}</td>
          </tr>
          <tr>
            <td>Calcium</td>
            <td>{/* Placeholder for calculated value */}</td>
            <td>{/* Placeholder for calculated value */}</td>
            <td>{/* Placeholder for calculated value */}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FOPTable;
