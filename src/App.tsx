import { useState } from "react";
import Game from "./components/Game";

function App() {
  const [isRulesActive, setRulesActive] = useState<boolean>(false);
  const activeRules = () => {
    setRulesActive(!isRulesActive);
  };

  return (
    <main className="h-screen flex flex-col justify-between items-center p-10">
      {isRulesActive ? (
        <>
          <button onClick={activeRules}>a</button>
        </>
      ) : (
        <>
          <Game />
          <button
            className="border rounded-lg py-2 px-8 mb-8"
            onClick={activeRules}
          >
            R U L E S
          </button>
        </>
      )}
    </main>
  );
}

export default App;
