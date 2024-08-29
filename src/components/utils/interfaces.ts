export interface ModesProps {
  setJogoAtivo: (ativo: boolean) => void;
  setEscolhaJ1: (escolha: string) => void;
  setEscolhaJ2: (random: string) => void;
  setTurno: React.Dispatch<React.SetStateAction<1 | 2>>;
  turno: 1 | 2;
  pvp: boolean;
}
