import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./customComponents/card";

function App() {
  return (
    <div className="flex [&>div]:flex-1 flex-nowrap max-lg:flex-col gap-5">
      <Card title="Poggy" description="hello" />
      <Card title="Das" />
      <Card title="Holy" />
      <Card title="Jetti" />
    </div>
  );
}

export default App;
