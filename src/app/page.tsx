"use client"
import { FormularioCompleto } from "@/components/formularios/formulario_completo"

export default function ProfileForm() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem", alignItems: "center" }}>
      <FormularioCompleto titulo={"Android"}/>
      <FormularioCompleto titulo={"web"}/>
      <FormularioCompleto titulo={"ios"}/>
    </div>
  )
}
