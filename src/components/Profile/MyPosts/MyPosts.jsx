import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import PropTypes from "prop-types";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return <div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>

        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};

MyPosts.propTypes = {
    allPosts: PropTypes.array
};

export default MyPosts;