import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("#333");

  return (
    <section
      className=" relative h-screen w-screen flex justify-center bg-gray-900 overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <div className="absolute bottom-12 flex flex-row bg-white text-white p-3 rounded-full">
        <button
          onClick={() => setColor("red")}
          className="px-4 py-2 m-2 bg-red-700 rounded-full"
        >
          Red
        </button>

        <button
          onClick={() => setColor("blue")}
          className="px-4 py-2 bg-blue-700 m-2 rounded-full"
        >
          Blue
        </button>

        <button
          onClick={() => setColor("green")}
          className="px-4 py-2 m-2 bg-green-700 rounded-full"
        >
          Green
        </button>

        <button
          onClick={() => setColor("yellow")}
          className="px-4 py-2 m-2 bg-yellow-700 rounded-full"
        >
          Yellow
        </button>

        <button
          onClick={() => setColor("pink")}
          className="px-4 py-2 m-2 bg-pink-700 rounded-full"
        >
          Pink
        </button>
      </div>
    </section>
  );
}

export default App;
