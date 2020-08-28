import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializedApp} from "./redux/app-reducer";
import store from "./redux/redux-store";
import {getFriends} from "./redux/sidebar-reducer";

const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import ("./components/Users/UsersContainer"));

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

                <div className={"app-wrapper-main"}>
                    <Navbar state={this.props.state.sidebar} getFriends={this.props.getFriends}/>
                    <div className={"app-wrapper-content"}>
                        <React.Suspense fallback={<Preloader/>}>
                            <Switch>
                                <Route exact path='/'
                                       render={() => <Redirect to={'/profile'}/>}/>
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
                                <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                            </Switch>
                        </React.Suspense>
                    </div>
                </div>


            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    state: state,
    initialized: state.app.initialized
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializedApp, getFriends}))(App);

const SamuraiJSApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
};

export default SamuraiJSApp;