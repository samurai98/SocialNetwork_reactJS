import React from "react";
import PropTypes from "prop-types"
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogsPage;

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                };

                return <Dialogs updateNewMessageBody={onMessageChange}
                                sendMessage={addMessage}
                                dialogsPage={state}/>
            }
        }
    </StoreContext.Consumer>;
};

DialogsContainer.propTypes = {
    state: PropTypes.shape({
        dialogs: PropTypes.array,
        messages: PropTypes.array
    }),
};

export default DialogsContainer;