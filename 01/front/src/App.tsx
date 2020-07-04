import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {CounterStoreContext} from "./stores/CounterStore";

const App = observer(() => {
    const counterStore = useContext(CounterStoreContext);

    return (
        <div>
            <span>hellooooo</span>
            <h1>{counterStore.count}</h1>
            <button onClick={() => counterStore.count++}>+</button>
        </div>
    )
})

export default App;