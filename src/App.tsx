import React, {useEffect, useState} from 'react';
import './App.css';
import Todolist from './Todolist';


type PropsType = {
    body: string
    id: number
    title: string
    userId: number

}


function App() {
    const [state, setState] = useState<PropsType[]>([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setState(json))
    }, [])

    const deleteHandler = () => {
        setState([])
    }
    const showpostsHandler = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setState(json))

    }
    return (
        <div className="App">
            <button onClick={deleteHandler}>DELETE</button>
            <button onClick={showpostsHandler}>showposts</button>
            <ul>
                {state.map((el) => {

                    return (<li key={el.id}>
                            <li><span>{el.id}</span></li>
                            <li><span>{el.userId}</span></li>
                            <li><span>{el.title}</span></li>
                            <li><span>{el.id}</span></li>

                        </li>
                    )
                })}
            </ul>



        </div>
    );
}

export default App;
