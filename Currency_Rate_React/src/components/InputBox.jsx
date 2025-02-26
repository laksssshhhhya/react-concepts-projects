import React, {useId} from "react";

function InputBox({
  label,
  amount,
  onAmtChange,
  onCurrChange,
  currOpt = [],
  selectCurr = "usd",
  amountDisable = false,
  currDisable = false,
  className = "",
}) {
    const amountInputId = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2 text-left">
        <label htmlFor={amountInputId}
        className="text-black/60 mb-2 ml-4 inline-block">{label} :</label>
        <input
        id={amountInputId} 
          className="outline-none w-full bg-transparent py-1.5 hover:bg-gray-100 rounded-lg pl-2"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmtChange && onAmtChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/60 mb-2 w-full">Currency Type :</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95"
            value = {selectCurr}
            onChange = {(e) => onCurrChange && onCurrChange(e.target.value)}
            disabled = {currDisable}
        >
          {currOpt.map((curr) => (
            <option key={curr} value={curr}>
                {curr.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
