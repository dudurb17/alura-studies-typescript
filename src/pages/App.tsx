import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import style from "./App.module.scss";
import Cronometro from "../components/Cronometro";
import ITarefa from "../types/tarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecinado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecinado={selecinado} />
    </div>
  );
}

export default App;
