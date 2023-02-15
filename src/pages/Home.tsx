import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { todos, todotype } from '../shared/todos'
import { RootState } from '../redux/config/configStore';
import { addTodo, cancelTodo, deleteTodo, doneTodo } from '../redux/config/modules/todo';
import { Link } from 'react-router-dom';



function Home() {

    const data: any = useSelector((state: RootState) => {
        return state.todo
    })

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    // input에 적는대로 렌더링이 일어남
    const titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const descChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDesc(event.currentTarget.value)
    }

    // 추가 버튼
    const addButton = () => {
        const newTodo = {
            id: Math.random(),
            title,
            desc,
            done: false,
        }

        dispatch(addTodo(newTodo))
    }

    // 삭제 버튼
    const deleteButton = (id: number) => {

        // console.log("data todo", data.todo)

        const newTodo = data.todo.filter(function (x: any) {
            console.log("x", x)
            console.log("id", id)
            return x.id !== id
        });
        // console.log("삭제", newTodo)

        dispatch(deleteTodo(newTodo))
    }

    // 완료 버튼
    const doneButton = (id: number) => {
        const newTodo = data.todo.map((x: any) =>
            (x.id === id ? { ...x, done: !x.done } : x)
        )
        console.log("완료", newTodo)

        dispatch(doneTodo(newTodo))
    }

    // 취소 버튼
    const cancelButton = (id: number) => {
        const newTodo = data.todo.map((item: any) => (item.id === id ? { ...item, done: !item.done } : item))
        console.log("취소", newTodo)

        dispatch(cancelTodo(newTodo))
    }

    return (
        <div>
            <div>
                <p>My Todo List</p>
                <p>React</p>
            </div>
            <div>
                <input
                    value={title}
                    onChange={titleChange}
                />
                <input
                    value={desc}
                    onChange={descChange}
                />
                <button onClick={addButton}>추가하기</button>
            </div>
            <div>
                <div>
                    <h3>Working...</h3>
                    {
                        data.todo.filter(function (work: todotype) {
                            return work.done === false
                        }).map((item: todotype) => {
                            return (
                                <div key={item.id}>
                                    <Link
                                        key={item.id}
                                        to={`/working/${item.id}`}>상세보기</Link>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <button onClick={() => deleteButton(item.id)}>삭제</button>
                                    <button onClick={() => doneButton(item.id)}>완료</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <h3>Done!!!</h3>
                    {
                        data.todo.filter(function (work: todotype) {
                            return work.done === true
                        }).map((item: todotype) => {
                            return (
                                <div key={item.id}>

                                    <Link
                                        key={item.id}
                                        to={`/working/${item.id}`}>상세보기</Link>

                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <button onClick={() => deleteButton(item.id)}>삭제</button>
                                    <button onClick={() => cancelButton(item.id)}>취소</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home