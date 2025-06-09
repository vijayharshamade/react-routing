import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { Suspense } from "react";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div> Loading Page.... </div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
