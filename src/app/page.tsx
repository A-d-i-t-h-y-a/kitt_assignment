import { Suspense } from "react";
import TempHome from "./components/TempHome";

export default function Page() {
  return (
    <main>
      <Suspense fallback={null}>
        <TempHome />
      </Suspense>
    </main>
  );
}
