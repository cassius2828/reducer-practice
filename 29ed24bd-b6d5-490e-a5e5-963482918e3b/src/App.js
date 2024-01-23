import { useReducer } from "react";
import "./styles.css";

const initialState = {
  colors: ["white", "blue", "red", "yellow", "black"],
  colorIndex: 0,
  circle: true,
  sizeIndex: 0,
  sizes: ["small", "medium", "large", "extra-large"],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleShape":
      return { ...state, circle: !state.circle };
    case "nextColor":
      if (state.colorIndex <= state.colors.length - 2)
        return {
          ...state,
          colorIndex: state.colorIndex + 1,
          color: state.colors.at(state.colorIndex),
        };
      else
        return {
          ...state,
          colorIndex: 0,
          color: state.colors.at(state.colorIndex),
        };
    case "nextSize":
      if (state.sizeIndex <= state.sizes.length - 2)
        return {
          ...state,
          sizeIndex: state.sizeIndex + 1,
          size: state.sizes.at(state.sizeIndex),
        };
      else
        return {
          ...state,
          sizeIndex: 0,
          size: state.sizes.at(state.sizeIndex),
        };
    default:
      break;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { sizeIndex, colorIndex, circle, sizes, colors } = state;
  return (
    <div className="App">
      <h1>Reducer Practice</h1>
      <h2>
        Dispatch actions to change the shape and color of the object below!
      </h2>{" "}
      <div className="btn-container" style={{ marginBottom: "3rem" }}>
        <button onClick={() => dispatch({ type: "nextColor" })}>
          Next Color
        </button>
        <button onClick={() => dispatch({ type: "toggleShape" })}>
          Toggle Shape
        </button>
        <button onClick={() => dispatch({ type: "nextSize" })}>
          Next Size
        </button>
      </div>
      <div
        className={
          circle
            ? `circle ${sizes.at(sizeIndex)} ${colors.at(colorIndex)}`
            : `${sizes.at(sizeIndex)} ${colors.at(colorIndex)}`
        }
      ></div>
    </div>
  );
}
