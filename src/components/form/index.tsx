import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";
import ITarefa from "../../types/tarefa";
class Form extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  state = {
    tarefa: "",
    tempo: "00:00:00",
  };
  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { ...this.state },
    ]);
  }
  render() {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            onChange={(value) => {
              this.setState({ ...this.state, tarefa: value.target.value });
            }}
            value={this.state.tarefa}
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            onChange={(value) =>
              this.setState({ ...this.state, tempo: value.target.value })
            }
            value={this.state.tempo}
            required
          />
        </div>
        <Button type="submit">Adicionar</Button>
      </form>
    );
  }
}
export default Form;
