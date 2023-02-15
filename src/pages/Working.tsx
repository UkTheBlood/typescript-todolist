import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { RootState } from '../redux/config/configStore';

function Working() {

  const params = useParams();

  const data: any = useSelector((state: RootState) => {
    return state.todo
  })

  console.log("data", data)

  const datas = data.todo.find((item: any) => {
    return String(item.id) === params.id;
  })

  return (
    <div>
      <div>
        <span>ID: {datas.id}</span>

        <Link to={'/'}><button>이전 페이지로</button></Link>

        <h3>{datas.title}</h3>
        <p>{datas.desc}</p>
      </div>
    </div>
  )
}

export default Working