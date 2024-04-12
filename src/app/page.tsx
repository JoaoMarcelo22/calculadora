'use client'
import * as S from "./styles";
import Button from "./components/Button"
import Input from "./components/Input"
import { useState } from "react";

const Home = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handlreAddNumber = (num: any) =>{
    setCurrentNumber(prev=> `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }
  const handleDivNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }
  const handleMultNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    }else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }
  
  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
        break;
        case '-':
          handleMinusNumbers();
        break;
        case '*':
          handleMultNumbers();
        break;
        case '/':
          handleDivNumbers();
        break;
        default:
          
        break;
      }
    }
  }
  return (
    <S.Container>
      <S.Content>
        <Input value={currentNumber}/>
        <S.Row>
          <Button label="C" onClick={()=> {handleOnClear(), setCurrentNumber('')}}/>
          <Button label="0" onClick={()=> handlreAddNumber('0')}/>
          <Button label="=" onClick={()=> handleEquals()}/>
          <Button label="/" onClick={handleDivNumbers}/>
        </S.Row>
        <S.Row>
          <Button label="7" onClick={()=> handlreAddNumber('7')}/>
          <Button label="8" onClick={()=> handlreAddNumber('8')}/>
          <Button label="9" onClick={()=> handlreAddNumber('9')}/>
          <Button label="*" onClick={handleMultNumbers}/>
        </S.Row>
        <S.Row>
          <Button label="4" onClick={()=> handlreAddNumber('4')}/>
          <Button label="5" onClick={()=> handlreAddNumber('5')}/>
          <Button label="6" onClick={()=> handlreAddNumber('6')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </S.Row>
        <S.Row>
          <Button label="1" onClick={()=> handlreAddNumber('1')}/>
          <Button label="2" onClick={()=> handlreAddNumber('2')}/>
          <Button label="3" onClick={()=> handlreAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </S.Row>
        
      </S.Content>
    </S.Container>
  );
}
export default Home;
