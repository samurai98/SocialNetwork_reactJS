import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import PropTypes from "prop-types";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
    let postsElements = props.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostBody);
    };

    return <div className={s.postsBlock}>
        <h3>My posts <i>(in working)</i></h3>
        <AddMyPostFormRedux onSubmit={addNewPost}/>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};

const AddMyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newPostBody'
                       placeholder='Enter your text'
                validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddMyPostFormRedux = reduxForm({form: 'ProfileAddMyPostForm'})(AddMyPostForm);

MyPosts.propTypes = {
    allPosts: PropTypes.array
};

export default MyPosts;