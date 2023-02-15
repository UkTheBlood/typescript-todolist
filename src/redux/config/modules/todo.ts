import React from 'react'
import { todos, todotype } from '../../../shared/todos'

const add_Todo = 'todo/add_todo'
const delete_Todo = 'todo/delete_Todo'
const done_Todo = 'todo/done_Todo'
const cancel_Todo = 'todo/cancel_Todo'

export const addTodo = (payload: todotype) => {
    return {
        type: add_Todo,
        payload: payload,
    }
}

export const deleteTodo = (payload: todotype) => {
    return {
        type: delete_Todo,
        payload,
    }
}

export const doneTodo = (payload: todotype) => {
    return {
        type: done_Todo,
        payload,
    }
}

export const cancelTodo = (payload: todotype) => {
    // payload는 받아오는 값
    return {
        type: cancel_Todo,
        payload,
    }
}

const initialState = {
    todo: todos,
}

const todo = (state = initialState, action: {type: string, payload: todotype}) => {   // 질문하기
    switch (action.type) {
        case add_Todo:
            return {
                todo: [...state.todo, action.payload]
            }
        case delete_Todo:
            return {
                todo: action.payload
            }
        case done_Todo:
            return {
                todo: action.payload
            }
        case cancel_Todo:
            return {
                todo: action.payload
            }
        default:
            return state;
    }
}

export default todo;