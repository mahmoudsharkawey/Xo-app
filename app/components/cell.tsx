import { Dispatch, SetStateAction } from "react";

type Cellprops = {
  id: number;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  cell: string;
  winingMasseg: string;
};

const Cell = ({
  go,
  setGo,
  id,
  cells,
  setCells,
  cell,
  winingMasseg,
}: Cellprops) => {
  const handleClick = () => {
    if (winingMasseg) {
      return;
    }
    const nottaken = !cells[id];
    if (nottaken) {
      if (go === "circle") {
        handlechange("circle");
        setGo("cross");
      } else if (go === "cross") {
        handlechange("cross");
        setGo("circle");
      }
    }
  };

  const handlechange = (cellTochange: string) => {
    let copyCells = [...cells];
    copyCells[id] = cellTochange;
    setCells(copyCells);
  };

  return (
    <div className="square" onClick={handleClick}>
      <div className={cell}>{cell ? (cell === "circle" ? "O" : "X") : ""}</div>
    </div>
  );
};

export default Cell;



// HTML 
// CSS
// JAVASCRIPT 
// TYPESCRIPT
// BOOTSTRAP 
// TAILWIND 
// JQUERY
// REACT.JS
// NEXT.JS
// EXPRESS.JS
// MONGO DB
// AI INTGRATION
// PAYMENT GETWAY

// GIT&GITHUP
// JIRA
// DISIGN PATTERNS
// SOLID PRINCIPLES
// NEST.JS
