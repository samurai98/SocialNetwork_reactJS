import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import PropTypes from "prop-types";

const MyPosts = (props) => {

    let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
    }

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
}

MyPosts.propTypes = {
    allPosts: PropTypes.array
}

export default MyPosts;