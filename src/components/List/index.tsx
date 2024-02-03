import style from "./List.module.scss";
import Item from "./Item";
import { useState } from "react";

function List() {
  const [tarefas, setTarefas] = useState([
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "01:00:03",
    },
    { tarefa: "TypeScript", tempo: "03.03.01" },
  ]);
  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          console.log("h2 clicado", tarefas);
          setTarefas([
            ...tarefas,
            { tarefa: "Estudar estado", tempo: "05:00:00" },
          ]);
        }}
      >
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}
export default List;
