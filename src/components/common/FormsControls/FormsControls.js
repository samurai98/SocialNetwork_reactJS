import React from 'react';
import styles from './FormsControls.module.css';
import {Field} from 'redux-form';

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            <div>
                <textarea {...input} {...props}> </textarea>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            <label>
                <input className={props.type === 'checkbox' ? '' : styles.input} {...input} {...props}/>
                <span>{props.text}</span>
            </label>
        </div>
    )
};

export const createField = (placeholder, name, validators, component, props = {}) => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}/>
    </div>);
