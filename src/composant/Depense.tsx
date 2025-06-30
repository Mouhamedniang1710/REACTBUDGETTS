import React, { useState } from "react";
import type { DepenseType } from "../App";

interface DepenseProps {
  depenses: DepenseType[];
  setDepenses: React.Dispatch<React.SetStateAction<DepenseType[]>>;
}

const Depense: React.FC<DepenseProps> = ({ depenses, setDepenses }) => {
  const [titre, setTitre] = useState("");
  const [montant, setMontant] = useState("");
  const [showModal, setShowModal] = useState(false);

  const ajouterDepense = () => {
    if (!titre.trim() || isNaN(parseFloat(montant))) {
      alert("Remplis tous les champs correctement");
      return;
    }

    const nouvelle: DepenseType = {
      id: Date.now(),
      titre: titre.trim(),
      montant: parseFloat(montant),
    };

    setDepenses((prev) => [...prev, nouvelle]);
    setTitre("");
    setMontant("");
    setShowModal(false);
  };

  const supprimerDepense = (id: number) => {
    setDepenses(depenses.filter((d) => d.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl text-[#D1C000] mb-6">Liste des Dépenses</h2>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Nouvelle Dépense</h3>
            <input
              type="text"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              placeholder="Titre"
              className="border p-3 rounded w-full mb-3"
            />
            <input
              type="number"
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
              placeholder="Montant"
              className="border p-3 rounded w-full mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Annuler
              </button>
              <button
                onClick={ajouterDepense}
                className="bg-[#0C5E69] text-white px-4 py-2 rounded"
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tableau */}
      <table className="w-full border text-left text-lg border-collapse">
        <thead>
          <tr>
            <th className="bg-[#0C5E69] text-white p-3 border text-center">Titre</th>
            <th className="bg-[#0C5E69] text-white p-3 border text-center">Montant</th>
            <th className="bg-[#0C5E69] text-white p-3 border text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {depenses.length > 0 ? (
            depenses.map((dep) => (
              <tr key={dep.id} className="border-t text-center">
                <td className="p-3 border border-gray-300">{dep.titre}</td>
                <td className="p-3 border border-gray-300">{dep.montant} CFA</td>
                <td className="p-3 border border-gray-300">
                  <button
                    onClick={() => supprimerDepense(dep.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center py-4 text-gray-500">
                
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="mt-4 ">
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#D1C000] text-white px-4 py-2 rounded text-lg hover:bg-yellow-400 "
        >
          Ajouter Dépense
        </button>
      </div>
    </div>
  );
};

export default Depense;
