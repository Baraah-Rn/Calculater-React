import { useReducer } from "react";
import "./App.css";
import DigitButton from "./DigitButton";
import { ACTIONS } from "./Actions";
import OperationButton from "./OperationButton";

function reducer(state, { type, payload }) {
  // eslint-disable-next-line default-case
  switch (type) {
    case ACTIONS.ADD_DIGIT:
    if(payload.digit === "." && state.currentOperand.includes(".")){
      return state
    }
    if(payload.digit === "0" && state.currentOperand === "0"){
     return state
    }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""} ${payload.digit}`,
      };
  
  case ACTIONS.CLEAR:
    return {}
 

  case ACTIONS.CHOOSE_OPERATION:
    if(state.currentOperand == null && state.previousOperand == null){
      return state
    }
    if(state.previousOperand ==null){
      return{
        ...state,
        operation:payload.operation
      }
    }
}
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand} {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>

      <button className="span-two" onClick={()=>{dispatch({type: ACTIONS.CLEAR})}}>AC</button>
      <button>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
