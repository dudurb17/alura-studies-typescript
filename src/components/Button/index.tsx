import React from "react";
import style from "./Button.module.scss";

interface Props {
  children?: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
}

function Button({ onClick, type, children }: Props) {
  return (
    <button type={type} onClick={onClick} className={style.botao}>
      {children}
    </button>
  );
}

// class Button1 extends React.Component<{
//   children: string;
//   type?: "button" | "submit";
//   onClick?: () => void;
// }> {
//   render() {
//     const type = this.props.type || "button";
//     const onClick = this.props.onClick;

//     return (
//       <>
//         <button type={type} onClick={onClick} className={style.botao}>
//           {this.props.children}
//         </button>
//       </>
//     );
//   }
// }

export default Button;
