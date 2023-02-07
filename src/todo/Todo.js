import React, {useState} from 'react';
import { Checkbox } from 'antd';
// import './todo.css';

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

    const [doneList, setDone] = useState([]);

    const onChange = (checkedValues) => {
        const checkedValueItem = checkedValues.length && checkedValues[checkedValues.length - 1];
        setTodo(todoList.filter(todo => todo.value !== checkedValueItem));
        
        const removedValue = todoList.filter(todo => todo.value === checkedValueItem);
        doneList.push(...removedValue)
        
        console.log(todoList);
    };

    const handelChange = (checkedValues) => {
        const checkedValueItem = checkedValues.length && checkedValues[checkedValues.length - 1];
        setDone(doneList.filter(done => done.value !== checkedValueItem));

        const removedValue = doneList.filter(done => done.value === checkedValueItem);
        todoList.push(...removedValue)
        
        console.log(doneList);
    };

    return(
        <div className='todo-done'>
            <div className='element'>
                <h2>Todo List</h2>
                <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '18px', padding: '15px'}} onChange={onChange}>
                    {todoList.map(list => <Checkbox value={list.value}>{list.label}</Checkbox>)}
                </Checkbox.Group>
            </div>
            <div className='element'>
                <h2>Done List</h2>
                <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '18px', padding: '15px' }} onChange={handelChange}>
                    {doneList.map(list => <Checkbox value={list.value}>{list.label}</Checkbox>)}
                </Checkbox.Group>
            </div>
        </div>
    )
    };

export default App;