import React from "react";
import Provider from "./components/common/Provider";
import Router from "./components/router/index";

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
