import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {CounterStoreContext} from "../stores/CounterStore";

const CountPage = observer(() => {
    const counterStore = useContext(CounterStoreContext);

    return (
        <div>
            <h1>CountPage</h1>
            <h1>{counterStore.count}</h1>
            <button onClick={() => counterStore.count++}>+</button>
        </div>
    )
})

export default CountPage;