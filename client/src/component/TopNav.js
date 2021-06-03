import { Link, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import { useSelector, useDispatch } from "react-redux";


const TopNav = () => {
  const { auth } = useSelector((state) => ({...state}));
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch({
      type : "LOGOUT",
      payload : null,
    })
    window.localStorage.removeItem('auth');
    history.push("/login");
  }

  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Navbar</Link>
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          {auth !== null && (
            <>
            <li className="nav-item">
            <Link className="nav-link" onClick={logout}>Logout</Link>
          </li> 
            </>
          )}



          {auth === null && (
            <>
            <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
            </>
          )}
        </ul>    
      </div>
  </nav>
  </>
  );

}  

  export default TopNav;