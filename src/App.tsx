import React from "react";
import React from "react";

import { foo, say } from "./util";

function App() {
  const a = say;
  const b = foo;

  const el = React.createElement("div");

  const c = {
    a: "b",
    c: "c",
  };

  return <div className="App">hello world</div>;
}

export default App;
