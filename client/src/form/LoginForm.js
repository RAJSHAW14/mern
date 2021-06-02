const LoginForm = ({
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword,
}) => (
    <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" 
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
              />
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Password"
            value={password}
            onChange = {(e) => setPassword(e.target.value)}
              />
        </div>
       
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
);

export default LoginForm;