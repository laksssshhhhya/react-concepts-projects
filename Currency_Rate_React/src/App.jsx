import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyinfo from "./hooks/useCurrencyinfo";
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/20/solid';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedamt, setConvertedamt] = useState(0);

  const currInfo = useCurrencyinfo(from);

  const options = Object.keys(currInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedamt(amount);
    setAmount(convertedamt);
  };

  const convert = () => {
    setConvertedamt(amount * currInfo[to]);
  };

  return (
    <div className="m-0 p-0 w-screen h-screen">
      <div className="relative w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-no-repeat position-relative m-0 p-0">
        <div
          className="absolute w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-no-repeat position-relative m-0 p-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg')`,
            filter: "brightness(50%) contrast(150%) grayscale(50%)",
            zIndex: -1,
          }}
        ></div>
        <div className="w-full z-10">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 pr-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1 ">
                <InputBox
                  label="From"
                  amount={amount}
                  currOpt={options}
                  onCurrChange={(currency) => setFrom(currency)}
                  selectCurr={from}
                  onAmtChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-1 translate-x-8">
                <button
                  type="button"
                  className="absolute right-2 -translate-y-1/2 border-2 border-white rounded-md bg-gray-600 text-white px-1 py-0.5 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-800 active:scale-95"
                  onClick={swap}
                >
                  <ArrowPathRoundedSquareIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedamt}
                  currOpt={options}
                  onCurrChange={(currency) => setTo(currency)}
                  selectCurr={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-600 text-white px-4 py-3 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow focus:outline-none focus:ring-2 focus:ring-gray-800 active:scale-95"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
