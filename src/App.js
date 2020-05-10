import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import PropTypes from "prop-types"
import store from "./redux/state";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className={"app-wrapper-content"}>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           state={props.state.dialogsPage}
                           addMessage={props.addMessage}
                           updateNewMessageText={props.updateNewMessageText}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

App.propTypes = {
    state: PropTypes.object
}

export default App;
