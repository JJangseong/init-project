import React from 'react';
import {observer} from "mobx-react-lite";
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CountPage from "./pages/CountPage";
import LayoutComponent from "components/layout/Layout.component";


const App = observer(() => {
    return (
        <LayoutComponent>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/count" component={CountPage} />
            </Switch>
        </LayoutComponent>
    )
})

export default App;