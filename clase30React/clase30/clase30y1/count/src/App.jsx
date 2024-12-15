import { Component1 } from "./Component1";
import { useState } from "react";
function App() {
  const [value, setValue] = useState(0);
  return (
    <>
      <Component1 sendValue={setValue} value={value} />
      {value}
    </>
  );
}

export default App;
