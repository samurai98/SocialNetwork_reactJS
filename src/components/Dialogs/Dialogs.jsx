import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import PropTypes from "prop-types"
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = props.state.messages.map(el => <Message message={el.message}/>);
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea ref={newMessageElement}
                                   onChange={onMessageChange}
                                   value={props.state.newMessageText}
                                   placeholder={'Write a message...'}/></div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Dialogs.propTypes = {
    state: PropTypes.shape({
        dialogs: PropTypes.array,
        messages: PropTypes.array
    }),
};

export default Dialogs;