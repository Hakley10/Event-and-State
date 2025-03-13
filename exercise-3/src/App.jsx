import React from "react";

function App() {
  /* You will need to use many state to keep the input values and other needs */
  const [a, setA] = React.useState("");
  const [b, setB] = React.useState("");
  const [sum, setSum] = React.useState(0);
  const [error, setError] = React.useState(false);

  /* You will need some function to handle the key pressed and button events */
  function onA(event) {
    setA(event.target.value);
  }

  function onB(event) {
    setB(event.target.value);
  }

  function computeSum() {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      setError(true);
      setSum(0);
    } else {
      setError(false);
      setSum(numA + numB);
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute button is clicked, this input displays the sum of the 2 numbers, or the error message in RED */}
      <input
        value={error ? "Invalid input" : sum}
        disabled
        style={{ color: error ? "red" : "white" }}
      />
      <button onClick={computeSum}>Compute</button>
    </main>
  );
}

export default App;