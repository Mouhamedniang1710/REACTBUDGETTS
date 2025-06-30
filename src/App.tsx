import React, { useEffect, useState } from "react";
import Home from "./composant/Home";
import Box from "./composant/Box";
import Depense from "./composant/Depense";
import Revenu from "./composant/Revenu";

export interface RevenuType {
  id: number;
  titre: string;
  montant: number;
}

export interface DepenseType {
  id: number;
  titre: string;
  montant: number;
}

const App = () => {
  const [revenus, setRevenus] = useState<RevenuType[]>([]);
  const [depenses, setDepenses] = useState<DepenseType[]>([]);

  // Charger depuis localStorage
  useEffect(() => {
    const dataRevenus = localStorage.getItem("revenus");
    const dataDepenses = localStorage.getItem("depenses");

    if (dataRevenus) setRevenus(JSON.parse(dataRevenus));
    if (dataDepenses) setDepenses(JSON.parse(dataDepenses));
  }, []);

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("revenus", JSON.stringify(revenus));
  }, [revenus]);

  useEffect(() => {
    localStorage.setItem("depenses", JSON.stringify(depenses));
  }, [depenses]);

  return (
    <>
      <Home />
      <Box revenus={revenus} depenses={depenses} />
      <Depense depenses={depenses} setDepenses={setDepenses} />
      <Revenu revenus={revenus} setRevenus={setRevenus} />
    </>
  );
};

export default App;
