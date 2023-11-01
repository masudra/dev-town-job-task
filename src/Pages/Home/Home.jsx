import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div className="bg-[rgb(226,232,240)]">
            <Navbar></Navbar>
            <Products></Products>
        </div>
    );
};

export default Home;