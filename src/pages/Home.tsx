import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { todos } from '../shared/todos'
import { RootState } from '../redux/config/configStore';



function Home() {

    const data = useSelector((state: RootState) => {
        console.log(state)
        return state.todo.todo;
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

        // dispatch(addButton())
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
                <button onClick={addButton}></button>
            </div>
            <div>
                <div>
                    <h3>Working...</h3>
                    <span>상세보기</span>
                    <h4>title</h4>
                    <p>desc</p>
                    <button>삭제</button>
                    <button>완료</button>
                </div>
                <div>
                    <h3>Done!!!</h3>
                    <span>상세보기</span>
                    <h4>title</h4>
                    <p>desc</p>
                    <button>삭제</button>
                    <button>완료</button>
                </div>
            </div>
        </div>
    )
}

export default Home