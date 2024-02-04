import React from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{
  children: string;
  type?: "button" | "submit";
  onClick?: () => void;
}> {
  render() {
    const type = this.props.type || "button";
    const onClick = this.props.onClick;

    return (
      <>
        <button type={type} onClick={onClick} className={style.botao}>
          {this.props.children}
        </button>
      </>
    );
  }
}

export default Button;
