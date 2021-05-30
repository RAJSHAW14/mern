import {userSelector, useSelector, useStore} from "react-redux";

const Home = () => {
    const state = useSelector((state) => state);
    return (
    <div className = "container-fluid p-5 h1 text-center">
        Home Page
    </div>
    );
};

export default Home;