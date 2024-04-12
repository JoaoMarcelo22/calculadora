'use client'
import { useState } from "react";
import * as S from "./styles";

const Input = ({value}) => {
    return (
      <S.InputContainer>
          <input disabled value={value}/>
      </S.InputContainer>
    );
  }
  export default Input;