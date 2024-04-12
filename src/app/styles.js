import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnV3aWh2M21kZDhkcnh3a2tlYWFmY294dmFjbDhkaXUwd2hmbjJkeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TxVVB6PfWMjE4/giphy.gif");

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    border: 2px solid #8ff;
    background-color: #8ff;
    padding: 2px;
    border-radius: 2%;
    width: 50%;

    @media only screen and (max-width: 500px) {
        width: 95%;
    }
    @media only screen and (min-width: 1000px) {
        width: 500px;
    }
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`