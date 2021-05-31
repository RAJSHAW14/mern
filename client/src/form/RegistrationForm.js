const RegistrationForm = ({
    handleSubmit,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
}) => (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" 
            id="exampleInputEmail1" 
            placeholder="Enter Name" 
            value={name}
            onChange = {(e) => setName(e.target.value)}
            />
        </div>
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

export default RegistrationForm;