import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
function Counter(props) {
  const st = React.useState(0);
  const counterVal = st[0];
  const counterValSetState = st[1];

  if (props.type === "button") {
    return (
      <button onClick={handleClick}>
        {" "}
        Counter:{props.name} <br /> {counterVal}{" "}
      </button>
    );
  } else {
    return <div>Counter:{counterVal}</div>;
  }

  function handleClick() {
    counterValSetState(counterVal + 1);
  }
}

// function Container(props) {
//   return (
//     <div>
//       <Counter name="Pasha" type={props.lookAndfeel} />
//       <Counter name="Khan" type={props.lookAndfeel} />
//     </div>
//   );
// }

function Cell(props) {
  let bg = "lightblue";
  let col = "black";
  if (props.type === "metal") {
    bg = "yellow";
    col = "brown";
  } else if (props.type === "liquid") {
    bg = "green";
    col = "white";
  }
  return (
    <div className="cell" style={{ backgroundColor: bg, color: col }}>
      <div className="element">
        <div className="at_num">{props.atomic_number}</div>
        <div className="symbol">{props.symbol}</div>
        <div className="at_details">
          {props.name}
          <br />
          {props.mass}
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
// ReactDOM.render(<Container lookAndfeel="button" />, rootElement);
ReactDOM.render(
  <div>
    <Cell
      type="gas"
      atomic_number="1"
      symbol="H"
      name="Hydrogen"
      mass="1.008"
    />
    <Cell
      type="liquid"
      atomic_number="80"
      symbol="Hg"
      name="Mercury"
      mass="200.59"
    />
  </div>,
  rootElement
);
