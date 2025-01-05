// import React from "react";
import { createRoot } from "react-dom/client";
import Education from "./components/Education";
import GenInfo from "./components/GenInfo";
import PracticalExp from "./components/PracticalExp";

createRoot(document.getElementById("root")).render(
  <>
    <Education />
    <GenInfo />
    <PracticalExp />
  </>
);
