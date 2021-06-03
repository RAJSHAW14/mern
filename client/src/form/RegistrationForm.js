const RegistrationForm = ({
    handleSubmit,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    place,
    setPlace,
}) => (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" 
            id="name" 
            placeholder="Enter Name" 
            value={name}
            onChange = {(e) => setName(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" 
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
              />
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange = {(e) => setPassword(e.target.value)}
              />
        </div>
        <div className="mb-3">
            <label className="form-label">Place</label>
            <input type="text" className="form-control"
            id="place"
            placeholder="Enter Place"
            value={place}
            onChange = {(e) => setPlace(e.target.value)}
              />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
);

export default RegistrationForm;