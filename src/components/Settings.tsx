import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { DiAptana } from "react-icons/di";
import { FaRobot, FaUserFriends } from "react-icons/fa";

function Settings() {
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
          className="w-58 py-3 px-3"
        >
          <DropdownSection title="Settings Game">
            <DropdownItem
              key="PvAI"
              shortcut="PvAI"
              description="Play with a robot"
              startContent={<FaRobot size={35} />}
            >
              Player vs robot
            </DropdownItem>
            <DropdownItem
              key="PvP"
              shortcut="PvP"
              description="Play with a friend"
              startContent={<FaUserFriends size={35} />}
            >
              Player vs Friend
            </DropdownItem>
          </DropdownSection>
          <DropdownSection title="Game Mode">
            <DropdownItem key={"Normal Mode"} description="Play classic mode">
              Normal Mode
            </DropdownItem>
            <DropdownItem key={"Bonus Mode"} description="Play new mode">
              Bonus Mode
            </DropdownItem>
          </DropdownSection>
          <DropdownSection title="Language">
            <DropdownItem key="Lingua pt" shortcut="🇧🇷">
              Portuguese
            </DropdownItem>
            <DropdownItem key="Language US" shortcut="🇺🇸">
              English
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default Settings;
