import React, {useState} from 'react';
import { Checkbox, Col, Row } from 'antd';
import './todo.css';


const handelChange = (checkedValues) => {
    console.log('checked in done = ', checkedValues);
}

const App = () => {
    const [todoList, setTodo] = useState([
        {
            value: '1',
            label: 'math'
        },
        {
            value: '2',
            label: 'physic'
        },
        {
            value: '3',
            label: 'french'
        },
        {
            value: '4',
            label: 'gym'
        },
    ])

    const [doneList, setDone] = useState([
        {
            value: '',
            label: ''
        },
    ]);

    const onChange = (checkedValues) => {
        const checkedValueItem = checkedValues[checkedValues.length - 1];

        const newValue = todoList.filter(todo => todo.value === checkedValueItem);

        setTodo(todoList.filter(todo => todo.value !== checkedValueItem));
        const removedValue = todoList.filter(todo => todo.value === checkedValueItem);
        doneList.push(...removedValue)

        console.log(removedValue);
    };
    return(
        <div className='todo-done'>
            <div className='element'>
                <h2>Todo List</h2>
                <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column' }} onChange={onChange}>
                    {todoList.map(list => <Checkbox value={list.value}>{list.label}</Checkbox>)}
                </Checkbox.Group>
            </div>
            <div className='element'>
                <h2>Done List</h2>
                <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column' }} onChange={handelChange}>
                    {doneList.map(list => <Checkbox value={list.value}>{list.label}</Checkbox>)}
                </Checkbox.Group>
            </div>
        </div>
    )
    };

export default App;