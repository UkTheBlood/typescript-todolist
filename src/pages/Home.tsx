import React, { useState } from 'react'
import { todos } from '../shared/todos'



function Home() {

    const [todo, setTodo] = useState(todos);

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const descChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDesc(event.currentTarget.value)
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