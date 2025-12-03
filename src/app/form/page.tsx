import { Suspense } from "react";
import FormPage from "./FormPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <FormPage />
    </Suspense>
  );
}