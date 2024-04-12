'use client'
import * as S from "./styles";

const Button = ({label, onClick}) => {
    return (
       <S.buttonContainer onClick={onClick}>
        {label}
       </S.buttonContainer>
    );
  }
  export default Button;