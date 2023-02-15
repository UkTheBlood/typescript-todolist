import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { todos, todotype } from '../shared/todos'
import { RootState } from '../redux/config/configStore';
import { addTodo, deleteTodo, doneTodo } from '../redux/config/modules/todo';



function Home() {

    const data: any = useSelector((state: RootState) => {
        return state.todo
    })

    console.log(data)

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
    const deleteButton = (id: React.MouseEvent<HTMLButtonElement>) => {
        const newTodo = data.filter(function (todo: any) {
            console.log(data)
            return todo.id !== id
        });

        dispatch(deleteTodo(newTodo))
    }

    // 완료 버튼
    const doneButton = (id: React.MouseEvent<HTMLButtonElement>) => {
        const newTodo = data.todo.map((todo: any) => (todo.id === id ? { ...todo, done: !todo.done } : todo))

        dispatch(doneTodo(newTodo))
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
                            return(
                                <div key={item.id}>
                                    <span>상세보기</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <button onClick={deleteButton}>삭제</button>
                                    <button onClick={doneButton}>완료</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <h3>Done!!!</h3>
                    <span>상세보기</span>
                    <h4>title</h4>
                    <p>desc</p>
                    <button onClick={deleteButton}>삭제</button>
                    <button onClick={deleteButton}>취소</button>
                </div>
            </div>
        </div>
    )
}

export default Home