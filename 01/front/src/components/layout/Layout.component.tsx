import React from 'react';
import {NavLink} from "react-router-dom";

type LayoutPropsType = {

}

const LayoutComponent: React.FunctionComponent<LayoutPropsType> = ({children}) => {
    return (
        <div>
            <div>
                <h1>Header</h1>
                <ul>
                    <li >
                        <NavLink to='/' activeStyle={{fontSize: "20rem"}}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/count' activeStyle={{fontSize: "20rem"}}>카운트 예제</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeStyle={{fontSize: "20rem"}}>ABOUT</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                {children}
            </div>
            <div>
                <h1>FOOTER</h1>
            </div>
        </div>
    )
}

export default LayoutComponent;