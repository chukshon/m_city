import React from "react";
import { ButtonPrimary, ButtonSecondary } from "./style";

export type Props = {
  primary?: boolean;
  secondary?: boolean;
  onClickLoad?: (event: Event) => void;
  onAdd?: (event: Event) => void;
  buttonText: string;
};
const Button = ({
  primary,
  secondary,
  onClickLoad,
  onAdd,
  buttonText,
}: Props) => {
  if (primary) {
    return <ButtonPrimary onClick={() => onAdd}>{buttonText}</ButtonPrimary>;
  }
  if (secondary) {
    return (
      <ButtonSecondary onClick={() => onClickLoad}>
        {buttonText}
      </ButtonSecondary>
    );
  }
  return <button>Button</button>;
};

export default Button;
