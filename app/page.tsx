"use client";
import NutrientTable from "./components/NutrientTable";
import InfoTable from "./components/InfoTable";
import { NutrientTableProvider } from "./context/NutrientTableContext";
import { InfoTableProvider } from "./context/InfoTableContext";

export default function Home() {
  return (
    <>
      <div className="mb-16 flex flex-col items-center justify-center">
        <header className="flex justify-center my-4">
          <h1 className="text-xl font-bold">FOP/NFT Calculator</h1>
        </header>
        <NutrientTableProvider>
          <InfoTableProvider>
            <InfoTable />
            <NutrientTable />
          </InfoTableProvider>
        </NutrientTableProvider>
      </div>
    </>
  );
}
