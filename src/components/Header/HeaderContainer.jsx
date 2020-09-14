import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserPhoto, logout} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        if (this.props.isAuth)
            this.props.getAuthUserPhoto(this.props.login);
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photo: state.auth.userPhoto
});


export default connect(mapStateToProps, {logout, getAuthUserPhoto})(HeaderContainer);