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
  selectBonus,
  selectNormal,
  selectPort,
  selectEng,
} from "./utils/settings";

function Settings() {
  const [selectedRobo, setSelectedRobo] = useState<boolean>(true);
  const [selectedPVP, setSelectedPVP] = useState<boolean>(false);
  const [selectedNormal, setSelectedNormal] = useState<boolean>(true);
  const [selectedBonus, setSelectedBonus] = useState<boolean>(false);
  const [selectedPort, setSelectedPort] = useState<boolean>(false);
  const [selectedEnglish, setSelectedEnglish] = useState<boolean>(true);

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
            title="Settings Game"
            classNames={{
              heading: "text-lg",
            }}
          >
            <DropdownItem
              key="PvAI"
              description="Play with a robot"
              endContent={<FaRobot size={30} />}
              classNames={{
                base: `data-[selectable=true]:focus:bg-neutral-700 data-[hover=true]:bg-neutral-700 data-[focus-visible=true]:outline-white  ${
                  selectedRobo && "border-1 border-white"
                }`,
              }}
              onClick={() => selectRobo(setSelectedRobo, setSelectedPVP)}
            >
              Player vs Robot
            </DropdownItem>
            <DropdownItem
              key="PvP"
              description="Play with a friend"
              endContent={<FaUserFriends size={30} />}
              classNames={{
                base: `data-[selectable=true]:focus:bg-neutral-700 data-[hover=true]:bg-neutral-700 data-[focus-visible=true]:outline-white ${
                  selectedPVP && "border-1 border-white"
                }`,
              }}
              onClick={() => selectPVP(setSelectedPVP, setSelectedRobo)}
            >
              Player vs Friend
            </DropdownItem>
          </DropdownSection>
          <DropdownSection
            title="Game Mode"
            classNames={{
              heading: "text-lg",
            }}
          >
            <DropdownItem
              key={"Normal Mode"}
              description="Play classic mode"
              classNames={{
                base: `data-[selectable=true]:focus:bg-neutral-700 data-[hover=true]:bg-neutral-700 data-[focus-visible=true]:outline-white ${
                  selectedNormal && "border-1 border-white"
                }`,
              }}
              onClick={() => selectNormal(setSelectedNormal, setSelectedBonus)}
            >
              Normal Mode
            </DropdownItem>
            <DropdownItem
              key={"Bonus Mode"}
              description="Play new mode"
              classNames={{
                base: `data-[selectable=true]:focus:bg-neutral-700 data-[hover=true]:bg-neutral-700 data-[focus-visible=true]:outline-white ${
                  selectedBonus && "border-1 border-white"
                }`,
              }}
              onClick={() => selectBonus(setSelectedBonus, setSelectedNormal)}
            >
              Bonus Mode
            </DropdownItem>
          </DropdownSection>
          <DropdownSection
            title="Language"
            classNames={{
              heading: "text-lg",
            }}
          >
            <DropdownItem
              key="Lingua pt"
              shortcut="🇧🇷"
              classNames={{
                base: `data-[selectable=true]:focus:bg-neutral-700 data-[hover=true]:bg-neutral-700 data-[focus-visible=true]:outline-white ${
                  selectedPort && "border-1 border-white"
                }`,
                shortcut: "border-none",
              }}
              onClick={() => selectPort(setSelectedPort, setSelectedEnglish)}
            >
              Portuguese
            </DropdownItem>
            <DropdownItem
              key="Language US"
              shortcut="🇺🇸"
              classNames={{
                base: `data-[selectable=true]:focus:bg-neutral-700 data-[hover=true]:bg-neutral-700 data-[focus-visible=true]:outline-white ${
                  selectedEnglish && "border-1 border-white"
                }`,
                shortcut: "border-none",
              }}
              onClick={() => selectEng(setSelectedEnglish, setSelectedPort)}
            >
              English
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default Settings;
