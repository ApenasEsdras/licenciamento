"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { FormularioCompleto } from "@/components/formularios/formulario_completo";
import { db } from "./firebaseConfig";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    Android: {},
    web: {},
    ios: {},
  });

  const handleSubmit = async (titulo: string, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [titulo]: data,
    }));
  };

  const printData = async (titulo: string, data: any) => {
    console.log(`Form Data for ${titulo}:`, data);
    try {
      const collectionRef = collection(db, "formData");
      await addDoc(collectionRef, { [titulo]: data });
      alert("Dados enviados ao Firebase com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar dados no Firebase:", error);
      alert("Erro ao salvar dados.");
    }
    console.log("Todos os Dados do Formulário:", JSON.stringify(formData, null, 2));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
        alignItems: "center",
      }}
    >
      <FormularioCompleto titulo="Android" onSubmit={handleSubmit} />
      <FormularioCompleto titulo="web" onSubmit={handleSubmit} />
      <FormularioCompleto titulo="ios" onSubmit={handleSubmit} />

      <button
        onClick={() => printData("FormTitle", formData)}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Print JSON
      </button>
    </div>
  );
}
