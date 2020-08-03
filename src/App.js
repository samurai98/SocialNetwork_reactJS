import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import PropTypes from "prop-types"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializedApp} from "./redux/app-reducer";

class App extends React.Component {

    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar state={this.props.state.sidebar}/>
                <div className={"app-wrapper-content"}>
                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer/>}/>
                    <Route path='/users' render={() =>
                        <UsersContainer/>}/>
                    <Route path='/login' render={() =>
                        <LoginPage/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    state: PropTypes.object
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializedApp})
)(App);
