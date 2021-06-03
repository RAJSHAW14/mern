import {useReducer, useState} from "react"
import LoginForm from "../form/LoginForm"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from 'react-redux';



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/login`, {
                email,
                password,
            });
           console.log("Login User ==>", res);
            toast.success('Login Sucesses');
            window.localStorage.setItem("auth",JSON.stringify(res.data));
            dispatch({
                type:"LOGGED_IN_USER",
                payload:res.data,
            })
            document.getElementById("email").value = "";
            document.getElementById("password").value= "";
        } catch (err) {
            console.log(err);    
            if(err.response.status === 400) toast.error(err.response.data);
        }
    };
    
    
    return (
        <>
    <div className="container-fluid col-md-6 offset-md-3 mt-5 shadow p-3 mb-5 rounded">
    <div className="row text-center">
    <div className="col">
    <h1>Login Form</h1>
    </div>
    </div>

        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />

    <div className="row ">
        <div className="col">
            <LoginForm 
                handleSubmit={handleSubmit}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
        </div>
    </div>
        
        
    </div>
    </>
    );
};

export default Login;