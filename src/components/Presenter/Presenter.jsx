import { useState, useEffect } from "react";

export default function Presenter({ num1, num2 }) {
  const [flag, setFlag] = useState(false);

  //   useEffect(() => {
  //     getUsers();
  //   }, [num2, flag]);

  function toggleFlag() {
    setFlag(!flag);
  }

  function getUsers() {
    alert("Pozvan je useEffect i funkcija za dohvacanje usera!");
  }

  return (
    <>
      <p>Num 1: {num1}</p>
      <p>Num 2: {num2}</p>
      <p>Flag value: {flag.toString()}</p>
      <button onClick={toggleFlag}>Toggle</button>
    </>
  );
}
