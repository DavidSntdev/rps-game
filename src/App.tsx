import { useState } from "react";
import Game from "./components/Game";
import { data } from "./data/data";
import { Button } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isRulesActive, setRulesActive] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isJogoAtivo, setJogoAtivo] = useState<boolean>(false);
  const [escolhaJ1, setEscolhaJ1] = useState<string>("");
  const [escolhaJ2, setEscolhaJ2] = useState<string>("");

  const activeRules = () => {
    setRulesActive(!isRulesActive);
  };

  return (
    <main
      className={"h-screen flex flex-col justify-between items-center p-10"}
      style={{
        backgroundColor: isRulesActive ? "rgba(255, 255, 255, 0.920" : "",
      }}
    >
      <AnimatePresence>
        {isRulesActive ? (
          <motion.div
            key="rules"
            className="flex flex-col items-center justify-between h-screen w-screen py-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-bold text-4xl text-slate-950">RULES</h1>
            <div>
              <img src={data.imgRules} alt="rules" />
            </div>
            <Button
              isIconOnly
              className="border-0"
              variant="faded"
              aria-label="Close rules"
              onClick={activeRules}
            >
              <img src={data.iconClose} alt="close rules" />
            </Button>
          </motion.div>
        ) : (
          <>
            <Game
              score={score}
              setScore={setScore}
              isJogoAtivo={isJogoAtivo}
              setJogoAtivo={setJogoAtivo}
              escolhaJ1={escolhaJ1}
              setEscolhaJ1={setEscolhaJ1}
              escolhaJ2={escolhaJ2}
              setEscolhaJ2={setEscolhaJ2}
            />
            <Button
              className="mb-8 px-8 py-2 lg:px-12 lg:mb-0 rounded-lg text-[rgba(255, 255, 255, 0.692)] border-[rgba(255, 255, 255, 0.692)] md:self-end"
              color="primary"
              variant="ghost"
              onClick={activeRules}
            >
              R U L E S
            </Button>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
