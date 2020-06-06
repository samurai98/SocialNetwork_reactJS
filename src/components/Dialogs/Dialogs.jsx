import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import PropTypes from "prop-types"


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>);
    let messagesElements = state.messages.map(el => <Message key={el.id} message={el.message}/>);
    let newMessageElement = state.newMessageText;

    let addMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageBody(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onMessageChange}
                                   value={newMessageElement}
                                   placeholder={'Write a message...'}/></div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Dialogs.propTypes = {
    state: PropTypes.shape({
        dialogs: PropTypes.array,
        messages: PropTypes.array
    }),
};

export default Dialogs;