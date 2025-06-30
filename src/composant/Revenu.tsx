
import React, { useState } from "react";
import type { RevenuType } from "../App";

interface RevenuProps {
  revenus: RevenuType[];
  setRevenus: React.Dispatch<React.SetStateAction<RevenuType[]>>;
}

const Revenu: React.FC<RevenuProps> = ({ revenus, setRevenus }) => {
  const [titre, setTitre] = useState("");
  const [montant, setMontant] = useState("");
  const [showModal, setShowModal] = useState(false);

  const ajouterRevenu = () => {
    if (!titre.trim() || isNaN(parseFloat(montant))) {
      alert("Remplis tous les champs correctement");
      return;
    }

    const nouveau: RevenuType = {
      id: Date.now(),
      titre: titre.trim(),
      montant: parseFloat(montant),
    };

    setRevenus((prev) => [...prev, nouveau]);
    setTitre("");
    setMontant("");
    setShowModal(false);
  };

  const supprimerRevenu = (id: number) => {
    setRevenus(revenus.filter((r) => r.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl text-[#D1C000] mb-4">Liste des Revenus</h2>

      {/* Modale */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Nouveau Revenu</h3>
            <input
              type="text"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              placeholder="Titre"
              className="border p-2 rounded w-full mb-3"
            />
            <input
              type="number"
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
              placeholder="Montant"
              className="border p-2 rounded w-full mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Annuler
              </button>
              <button
                onClick={ajouterRevenu}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tableau des revenus */}
      <table className="w-full border text-left text-lg border-collapse">
        <thead>
          <tr>
            <th className="bg-[#0C5E69] text-white p-3 border text-center">Titre</th>
            <th className="bg-[#0C5E69] text-white p-3 border text-center">Montant</th>
            <th className="bg-[#0C5E69] text-white p-3 border text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {revenus.length > 0 ? (
            revenus.map((rev) => (
              <tr key={rev.id} className="border-t text-center">
                <td className="p-3 border border-gray-300">{rev.titre}</td>
                <td className="p-3 border border-gray-300">{rev.montant} CFA</td>
                <td className="p-3 border border-gray-300">
                  <button
                    onClick={() => supprimerRevenu(rev.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
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
          className="bg-[#D1C000] text-white px-4 py-2 rounded text-lg hover:bg-yellow-400"
        >
          Ajouter un Revenu
        </button>
      </div>
    </div>
  );
};

export default Revenu;


