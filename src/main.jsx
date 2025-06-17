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

//  <Suspense
//       fallback={
//         <div
//           style={{
//             display: "flex",
//             height: "100vh",
//             justifyContent: "center",
//             alignItems: "center",
//             backgroundColor: "#f8f9fa",
//           }}
//         >
//           <div
//             style={{
//               width: "50px",
//               height: "50px",
//               border: "6px solid #007bff",
//               borderTop: "6px solid transparent",
//               borderRadius: "50%",
//               animation: "spin 1s linear infinite",
//             }}
//           />
//           <style>
//             {`
//             @keyframes spin {
//               0% { transform: rotate(0deg); }
//               100% { transform: rotate(360deg); }
//             }
//           `}
//           </style>
//         </div>
//       }
//     >
//       <RouterProvider router={router} />
//     </Suspense>
