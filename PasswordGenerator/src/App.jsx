import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  //ref hook
  const passref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()_<>?/~{}[]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numAllowed, charAllowed, setpassword]);

  const copyPassToClip = useCallback(() => {
    passref.current?.select();
    // passref.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-2xl rounded-lg pt-2  mt-20 mb-4 text-gray-800 bg-gray-800 ">
        <h1 className="text-white text-center text-lg my-1 pb-2">
          Password Generator
        </h1>
        <div className="flex shadow-xl rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readonly
            ref={passref}
          />
          <button
            onClick={copyPassToClip}
            className="outline-none bg-orange-400 text-gray-800 font-medium px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
      </div>
      <div className="w-full max-w-md mx-auto shadow-2xl rounded-lg px-4 py-3 my-1 text-orange-500 bg-gray-800">
        <div className="flex items-centre gap-x-1">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer h-2 mt-1.5 bg-gray-400 rounded-lg appearance-none accent-orange-600 focus:outline-none"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1 mt-2">
          <input
            type="checkbox"
            id="numberinput"
            onChange={() => {
              setnumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberinput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1 mt-2">
          <input
            type="checkbox"
            id="characterallow"
            onChange={() => {
              setcharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterallow">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
