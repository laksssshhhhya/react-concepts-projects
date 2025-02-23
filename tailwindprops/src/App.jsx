import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card username="lakshya" text="no" />
      <Card username="jha" text="yes" />
    </>
  );
}

export default App;
