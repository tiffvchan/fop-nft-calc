"use client";
import NutrientTable from "./components/NutrientTable";
import InfoTable from "./components/InfoTable";

export default function Home() {
  return (
    <>
      <div className="mb-16 flex flex-col items-center justify-center">
        <header className="flex justify-center my-4">
          <h1 className="text-xl font-bold">FOP/NFT Calculator</h1>
        </header>
        <InfoTable />
        <NutrientTable />
      </div>
    </>
  );
}
