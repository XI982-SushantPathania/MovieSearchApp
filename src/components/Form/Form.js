import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector } from "react-redux";
import {postLoginCredentials} from '../../store/actions/login';
import {useHistory} from "react-router-dom";
import styles from './Form.css';
import Loader from '../Loader/Loader'

const Form = () => {
    const dispatch = useDispatch();
    const LoginCredentialsState = useSelector((state) => state.loginCredentialsState);
    let history = useHistory();

    const[values,setValues] = useState({username:"", password:""});
    const[errors,setErrors] = useState({username:"", password:"", authenticate:""});


    const handleChange = event => {
        const{ name , value } = event.target;
        setErrors({
           ...errors,
           authenticate:"",
           [name] : ""
        })
        setValues({
            ...values,
            [name] : value
        });

    };

    const handleSubmit = event => {
        event.preventDefault();
        if(values.username=="" || values.password == "" || values.password.length !== 4)
        {
        setErrors(validateLogin(values));
    }
    else
        dispatch(postLoginCredentials(values));
    }

    const validateLogin = values => {
        let errors = {};
        if(!values.username){
            errors.username = "Username is required"
        }
        if(!values.password){
            errors.password = "Password is required";
        }
        else if(values.password.length !== 4){
            errors.password = "Password length should be equal to 4";
        }
        return errors;
    }

    useEffect(()=>{
       if(LoginCredentialsState.movieData != null){
       if(LoginCredentialsState.movieData.Response == "False"){
        let errors = {};
        errors = " Incorrect Userame or Password";
        setErrors({
            authenticate:errors})     
     }
     else if(LoginCredentialsState.movieData.Response == "True")  {
     history.push("/search")
     }
    };
    },[LoginCredentialsState.movieData])
        
    return(
        <>
        {LoginCredentialsState.isLoading ? 
        <Loader/>:null}
        <div className={styles.login}>
            <form onSubmit={handleSubmit}>
                <h1> Login </h1>
                <div>
            <label>username</label>
            <div className={styles.error}>
                <input 
                name = "username"
                type ="text"
                value={values.username}
                onChange={handleChange}/>
                {errors.username && <p>{errors.username}</p>}
                </div>
                </div>
                <div className={styles.error}>
                <label>Password</label>
                <div>
                    <input 
                    name="password"
                    type="password"
                     value={values.password}
                     onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}
                </div>
                </div>
                <button type="submit"> Submit </button>
                <div className={styles.error}>
                {errors.authenticate && <p>{errors.authenticate}</p>}
                </div>
                </form>
            </div>
            </>

    );
};

export default Form;