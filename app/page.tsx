"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Cell from "./components/cell";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winingMasseg, setWiningMasseg] = useState("");
  const [go, setGo] = useState("circle");
  console.log(cells);

  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle");
      const crossWins = combo.every((cell) => cells[cell] === "cross");

      if (circleWins) {
        setWiningMasseg("circle Wins !");
      } else if (crossWins) {
        setWiningMasseg("cross Wins !");
      }
    });
  }, [cells]);

  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winingMasseg) {
      setWiningMasseg("Draw !");
    }
  }, [cells, winingMasseg]);

  return (
    <main className="container">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            go={go}
            setGo={setGo}
            id={index}
            cells={cells}
            setCells={setCells}
            key={index}
            cell={cell}
            winingMasseg={winingMasseg}
          />
        ))}
      </div>
      <div>{winingMasseg}</div>
      <div>{!winingMasseg && `Its now ${go} turn!`}</div>
    </main>
  );
}
