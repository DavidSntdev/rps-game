import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { useState } from "react";
import { DiAptana } from "react-icons/di";
import { FaRobot, FaUserFriends } from "react-icons/fa";
import {
  selectRobo,
  selectPVP,
  modeNormal,
  modeBonus,
  selectPort,
  selectEng,
  selectEsp,
} from "./utils/settings";

interface SettingsProps {
  setLanguage: (value: string) => void;
  language: string;
  setMode: (value: string) => void;
  mode: string;
}

function Settings({ setLanguage, language, setMode, mode }: SettingsProps) {
  const [selectedRobo, setSelectedRobo] = useState<boolean>(true);
  const [selectedPVP, setSelectedPVP] = useState<boolean>(false);

  return (
    <>
      <Dropdown
        classNames={{
          content: "bg-neutral-800 rounded-3xl",
        }}
      >
        <DropdownTrigger>
          <Button
            isIconOnly
            variant="faded"
            aria-label="Settings"
            className="rounded-lg bg-transparent"
          >
            <DiAptana />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          variant="faded"
          aria-label="Dropdown menu with description"
          className="w-52 lg:w-64 py-3 px-3"
        >
          <DropdownSection
            title={
              language === "en"
                ? "Settings Game"
                : language === "pt"
                ? "Configurações do Jogo"
                : "Configuraciones del Juego"
            }
            classNames={{
              heading: "text-lg",
            }}
          >
            <DropdownItem
              key="PvAI"
              description={
                language === "en"
                  ? "Play with a robot"
                  : language === "pt"
                  ? "Jogar com um robô"
                  : "Jugar con un robot"
              }
              endContent={<FaRobot size={30} />}
              classNames={{
                base: `data-[selectable=true]:focus:bg-neutral-700 data-[hover=true]:bg-neutral-700 data-[focus-visible=true]:outline-white  ${
                  selectedRobo && "border-1 border-white"
                }`,
              }}
              onClick={() => selectRobo(setSelectedRobo, setSelectedPVP)}
            >
              {language === "en"
                ? "Player vs Robot"
                : language === "pt"
                ? "Jogador vs Robô"
                : "Jugador vs Robot"}
            </DropdownItem>
            <DropdownItem
              key="PvP"
              description={
                language === "en"
                  ? "Play with a friend"
                  : language === "pt"
                  ? "Jogar com um amigo"
                  : "Jugar con un amigo"
              }
              endContent={<FaUserFriends size={30} />}
              classNames={{
                base: `data-[selectable=true]:focus:bg-neutral-700 data-[hover=true]:bg-neutral-700 data-[focus-visible=true]:outline-white ${
                  selectedPVP && "border-1 border-white"
                }`,
              }}
              onClick={() => selectPVP(setSelectedPVP, setSelectedRobo)}
            >
              {language === "en"
                ? "Player vs Friend"
                : language === "pt"
                ? "Jogador vs Amigo"
                : "Jugador vs Amigo"}
            </DropdownItem>
          </DropdownSection>
          <DropdownSection
            title={
              language === "en"
                ? "Game Mode"
                : language === "pt"
                ? "Modo de Jogo"
                : "Modo de Juego"
            }
            classNames={{
              heading: "text-lg",
            }}
          >
            <DropdownItem
              key={"Normal Mode"}
              description={
                language === "en"
                  ? "Play classic mode"
                  : language === "pt"
                  ? "Jogar o modo clássico"
                  : "Jugar modo clásico"
              }
              classNames={{
                base: `data-[selectable=true]:focus:bg-neutral-700 data-[hover=true]:bg-neutral-700 data-[focus-visible=true]:outline-white ${
                  mode === "normal" && "border-1 border-white"
                }`,
              }}
              onClick={() => modeNormal(setMode)}
            >
              {language === "en"
                ? "Normal Mode"
                : language === "pt"
                ? "Modo Normal"
                : "Modo Normal"}
            </DropdownItem>
            <DropdownItem
              key={"Bonus Mode"}
              description={
                language === "en"
                  ? "Play new mode"
                  : language === "pt"
                  ? "Jogar o novo modo"
                  : "Jugar nuevo modo"
              }
              classNames={{
                base: `data-[selectable=true]:focus:bg-neutral-700 data-[hover=true]:bg-neutral-700 data-[focus-visible=true]:outline-white ${
                  mode === "bonus" && "border-1 border-white"
                }`,
              }}
              onClick={() => modeBonus(setMode)}
            >
              {language === "en"
                ? "Bonus Mode"
                : language === "pt"
                ? "Modo Bônus"
                : "Modo Bonus"}
            </DropdownItem>
          </DropdownSection>
          <DropdownSection
            title={
              language === "en"
                ? "Language"
                : language === "pt"
                ? "Idioma"
                : "Idioma"
            }
            classNames={{
              heading: "text-lg",
            }}
          >
            <DropdownItem
              key="Lingua pt"
              shortcut="🇧🇷"
              classNames={{
                base: `data-[selectable=true]:focus:bg-neutral-700 data-[hover=true]:bg-neutral-700 data-[focus-visible=true]:outline-white ${
                  language == "pt" && "border-1 border-white"
                }`,
                shortcut: "border-none",
              }}
              onClick={() => selectPort(setLanguage)}
            >
              {language === "en"
                ? "Portuguese"
                : language === "pt"
                ? "Português"
                : "Portugués"}
            </DropdownItem>
            <DropdownItem
              key="Language US"
              shortcut="🇺🇸"
              classNames={{
                base: `data-[selectable=true]:focus:bg-neutral-700 data-[hover=true]:bg-neutral-700 data-[focus-visible=true]:outline-white ${
                  language == "en" && "border-1 border-white"
                }`,
                shortcut: "border-none",
              }}
              onClick={() => selectEng(setLanguage)}
            >
              {language === "en"
                ? "English"
                : language === "pt"
                ? "Inglês"
                : "Inglés"}
            </DropdownItem>
            <DropdownItem
              key="Language ES"
              shortcut="🇪🇸"
              classNames={{
                base: `data-[selectable=true]:focus:bg-neutral-700 data-[hover=true]:bg-neutral-700 data-[focus-visible=true]:outline-white ${
                  language == "es" && "border-1 border-white"
                }`,
                shortcut: "border-none",
              }}
              onClick={() => selectEsp(setLanguage)}
            >
              {language === "en"
                ? "Spanish"
                : language === "pt"
                ? "Espanhol"
                : "Español"}
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default Settings;
