import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import PropTypes from "prop-types"

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = props.state.messages.map(el => <Message message={el.message}/>);
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessageElement}
                          onChange={onMessageChange}
                          value={props.state.newMessageText}/>
            </div>
            <div>
                <button onClick={addMessage}>Add messages</button>
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