import Button from "../Button";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import tempoParaSegundos from "../../common/utils/time";
import ITarefa from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
  selecinado: ITarefa | undefined;
}

export default function Cronometro({ selecinado }: Props) {
  const [tempo, setTempo] = useState<number>();
  useEffect(() => {
    if (selecinado?.tempo) {
      setTempo(tempoParaSegundos(selecinado.tempo));
    }
  }, [selecinado]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      Tempo:{tempo}
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Button>Começar!</Button>
    </div>
  );
}
