import React from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{
  children: string;
  type?: "button" | "submit";
}> {
  render() {
    const type = this.props.type || "button";
    return (
      <>
        <button type={type} className={style.botao}>
          {this.props.children}
        </button>
      </>
    );
  }
}

export default Button;
