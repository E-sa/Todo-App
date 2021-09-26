import React from "react";
import "../styles/styles.scss"

import ThemeSwitcherButton from "./ThemeSwitcherButton";
import TaskManager from "./TaskManager";


import { ThemeProvider } from "styled-components";
import GlobalStyle from "../themes/GlobalStyle";
import { dark } from "../themes/dark";
import { light } from "../themes/light";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //defult theme it changes to dark on button click
            theme: dark,
        };
    }

    //change theme function
    changeTheme = () => {
        if (this.state.theme === light) {
            this.setState({
                theme: dark,
            });
        } else if (this.state.theme === dark) {
            this.setState({
                theme: light,
            });
        }
    };

    render() {
        return (
            <main>
            <div className="container">

                <ThemeProvider theme={this.state.theme}>

                    <GlobalStyle />

                    {/* 1. title and theme switcher container */}
                    <div className="title-theme-container">
                        <h1>TODO</h1>
                        <ThemeSwitcherButton onChangeTheme={this.changeTheme} />
                    </div>

                    {/* 2. everything that can happen to each task happens here */}
                    <TaskManager />

                </ThemeProvider>
            </div>
</main>
        );
    }
}

export default App;
