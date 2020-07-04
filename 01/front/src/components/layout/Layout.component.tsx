import React from 'react';
import {Link} from "react-router-dom";

type LayoutPropsType = {

}

const LayoutComponent: React.FunctionComponent<LayoutPropsType> = ({children}) => {
    return (
        <div>
            <div>
                <h1>Header</h1>
                <ul>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/count'>카운트 예제</Link>
                    </li>
                    <li>
                        <Link to='/about'>ABOUT</Link>
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