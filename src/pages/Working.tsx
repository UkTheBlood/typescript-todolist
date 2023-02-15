import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../redux/config/configStore';

function Working() {

  const params = useParams();

  const data: any = useSelector((state: RootState) => {
    return state.todo
  })

  const datas = data.todo.find((item: any) => {
    return String(item.id) === params.id;
  })

  return (
    <Container>
      <Center>
        <span>ID: {datas.id}</span>

        <Link to={'/'}><button>이전 페이지로</button></Link>

        <h3>{datas.title}</h3>
        <p>{datas.desc}</p>
      </Center>
    </Container>
  )
}

export default Working

const Container = styled.div`
  height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 1200px;
    margin: auto;
`
const Center = styled.div`
    width: 250px;
    height: 200px;
    margin: auto;
    padding: 10px;
    border: 3px solid green;
    border-radius: 10px;
`