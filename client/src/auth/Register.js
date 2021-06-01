import {useState} from "react"
import RegistrationForm from "../form/RegistrationForm"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`http://localhost:8000/api/register`, {
                name,
                email,
                password,
            });
           // console.log("Register User ==>", res);
            toast.success('Register Sucessfull');
        } catch (err) {
            console.log(err);    
            if(err.response.status === 400) toast.error(err.response.data);
        }
    };
    
    return (
    <>
    <div className="container-fluid col-md-6 offset-md-3">
    <div className="row text-center">
    <div className="col">
    <h1>Registration Form</h1>
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
            <RegistrationForm 
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}
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

export default Register;