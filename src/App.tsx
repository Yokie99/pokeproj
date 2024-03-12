import React from "react";
import "./App.css";
import NavTitleComponent from "./Components/NavTitleComponent";
import LeftColumnComponent from "./Components/LeftColumnComponent";
import RightColumnComponent from "./Components/RightColumnComponent";

function App() {
  return (
    <body className="bg-main bg-no-repeat bg-cover bg-center bg-fixed h-screen">
<NavTitleComponent />
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-20">
        
        <div>
          <LeftColumnComponent/>
        </div>
        <div>
          <RightColumnComponent/>
        </div>

      </div>
    </body>
  );
}

export default App;
