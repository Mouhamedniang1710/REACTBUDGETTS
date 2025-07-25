import React from "react";
import type { DepenseType, RevenuType } from "../App";

interface BoxProps {
  revenus: RevenuType[];
  depenses: DepenseType[];
}

const Box: React.FC<BoxProps> = ({ revenus, depenses }) => {
  const totalRevenus = revenus.reduce((acc, rev) => acc + rev.montant, 0);
  const totalDepenses = depenses.reduce((acc, dep) => acc + dep.montant, 0);
  const solde = totalRevenus - totalDepenses;

  return (
    <div className="flex flex-row items-center justify-center w-full h-40 mt-6 gap-8">
      {/* Budget */}
      <div className="w-1/4 h-full flex flex-col items-center justify-center shadow-2xl">
        <div className="bg-[#0C5E69] w-full h-14 flex items-center justify-center">
          <h1 className="text-white text-2xl font-bold">Budget</h1>
        </div>
        <p className="text-black text-2xl font-bold mt-5">{totalRevenus} CFA</p>
      </div>

      {/* Dépense */}
      <div className="w-1/4 h-full flex flex-col items-center justify-center shadow-2xl">
        <div className="bg-[#0C5E69] w-full h-14 flex items-center justify-center">
          <h1 className="text-white text-2xl font-bold">Dépense</h1>
        </div>
        <p className="text-black text-2xl font-bold mt-5">{totalDepenses} CFA</p>
      </div>

      {/* Solde */}
      <div className="w-1/4 h-full flex flex-col items-center justify-center shadow-2xl">
        <div className="bg-[#0C5E69] w-full h-14 flex items-center justify-center">
          <h1 className="text-white text-2xl font-bold">Solde</h1>
        </div>
        <p className="text-black text-2xl font-bold mt-5">{solde} CFA</p>
      </div>
    </div>
  );
};

export default Box;
