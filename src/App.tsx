import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { Button } from "@nextui-org/react";
import { data, dataBonus } from "./data/data";
import Game from "./components/Game";
import Settings from "./components/Settings";
import axios from "axios";

function App() {
  const [isRulesActive, setRulesActive] = useState<boolean>(false);
  const [score, setScore] = useState<number>(
    () => Number(localStorage.getItem("score")) || 0
  );
  const [scoreJ1, setScoreJ1] = useState<number>(
    () => Number(localStorage.getItem("scoreJ1")) || 0
  );
  const [scoreJ2, setScoreJ2] = useState<number>(
    () => Number(localStorage.getItem("scoreJ2")) || 0
  );
  const [turno, setTurno] = useState<1 | 2>(1);
  const [isJogoAtivo, setJogoAtivo] = useState<boolean>(false);
  const [escolhaJ1, setEscolhaJ1] = useState<string>("");
  const [escolhaJ2, setEscolhaJ2] = useState<string>("");
  const [language, setLanguage] = useState<string>("en");
  const [mode, setMode] = useState<string>("normal");
  const [isPVP, setIsPVP] = useState<boolean>(false);

  const activeRules = () => {
    setRulesActive(!isRulesActive);
  };

  const imgRules = mode === "normal" ? data.imgRules : dataBonus.rules;

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(`https://ipapi.co/json/`);
        const country = response.data.country_name;
        setLanguage(country === "Brazil" ? "pt" : "en");
      } catch (error) {
        console.error("Error fetching country data", error);
      }
    };

    fetchCountry();
  }, []);

  useEffect(() => {
    localStorage.setItem("score", String(score));
    localStorage.setItem("scoreJ1", String(scoreJ1));
    localStorage.setItem("scoreJ2", String(scoreJ2));
  }, [score, scoreJ1, scoreJ2]);

  return (
    <main
      className={`h-screen flex flex-col justify-between items-center p-10`}
      style={{
        background: isRulesActive ? "var(--background-gradient)" : "",
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
            <h1 className="font-bold text-4xl text-slate-300">
              {language === "en" && "RULES"}
              {language === "pt" && "REGRAS"}
              {language === "es" && "NORMAS"}
            </h1>
            <div>
              <img src={imgRules} alt="rules" />
            </div>
            <Button
              isIconOnly
              className="border-1 bg-transparent rounded-[50%]"
              variant="faded"
              aria-label="Close rules"
              onClick={activeRules}
            >
              <GrClose size={20} />
            </Button>
          </motion.div>
        ) : (
          <>
            <Game
              setScore={setScore}
              setScoreJ1={setScoreJ1}
              setScoreJ2={setScoreJ2}
              setJogoAtivo={setJogoAtivo}
              setEscolhaJ1={setEscolhaJ1}
              setEscolhaJ2={setEscolhaJ2}
              setTurno={setTurno}
              turno={turno}
              score={score}
              scoreJ1={scoreJ1}
              scoreJ2={scoreJ2}
              isJogoAtivo={isJogoAtivo}
              pvp={isPVP}
              escolhaJ1={escolhaJ1}
              escolhaJ2={escolhaJ2}
              language={language}
              mode={mode}
            />
            <div className="flex gap-3 mb-8 px-8 py-2 lg:px-12 lg:mb-0 md:self-end">
              <Settings
                setLanguage={setLanguage}
                language={language}
                setMode={setMode}
                mode={mode}
                setIsPVP={setIsPVP}
                pvp={isPVP}
              />
              <Button
                color="primary"
                variant="ghost"
                onClick={activeRules}
                className="rounded-lg text-white border-[rgba(255, 255, 255, 0.692)] lg:px-7"
              >
                {language === "en" && "R U L E S"}
                {language === "pt" && "R E G R A S"}
                {language === "es" && "N O R M A S"}
              </Button>
            </div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
