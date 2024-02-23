// import "./App.css";

import { Fragment } from "react";
import NavBar from "./Components/NavBar";
import BudgetCard from "./Components/BudgetCard";
function App() {
  const cardStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill , minmax(300px , 1fr))",
    gap: "1rem",
    alignItems: "flex-start",
  };

  return (
    <Fragment>
      <NavBar />
      <div style={cardStyle}>
        <BudgetCard name="Books" amount={200} max={1500}></BudgetCard>
      </div>
    </Fragment>
  );
}

export default App;
