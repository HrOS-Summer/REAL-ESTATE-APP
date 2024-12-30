import SearchBar from "../../components/searchBar/SearchBar";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="textContainer">
                <div className="wrapper"> {/*Wrapper is used to add padding to h1 text else the padding will be applied to textContainer and image will shrink */}
                    <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate eveniet, provident blanditiis voluptatem ipsa corporis sunt quia consequuntur, ratione aut tenetur. Cumque dignissimos rerum minus qui fuga quaerat fugiat mollitia.                       
                    </p>

                    <SearchBar />
                    
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="home" />
            </div>
        </div>
    )
}

export default Home;