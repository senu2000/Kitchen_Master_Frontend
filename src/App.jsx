import "./css/Homecss.css";
import Navbardrk from "./components/Navbar";
import Footerdark from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import SearchBar from "./components/SearchBar";
import AllRcard from "./components/AllRecipeCard";



function App() {
  return (
    <div className="body">
        <Navbardrk/>
        <hr id="hr1"/>
        <ImageSlider/>
        <hr id="hr1"/>
        <div id="heading-area">
            <h1 className="animate-charcter">Kitchen-Master <span>Recipes</span> </h1>
            <p>
                Kitchen-Master is your culinary companion on a journey of flavors, designed to simplify the art of cooking.
                This user-friendly website is a treasure trove of diverse recipes, catering to every palate and skill level.
                Whether you're a seasoned chef or a kitchen novice, Kitchen-Master empowers you to explore, discover, and
                create delicious meals effortlessly. With a vast collection of meticulously curated recipes, intuitive search
                features, and step-by-step instructions, this culinary hub transforms your kitchen into a culinary haven.
                Elevate your cooking experience, unlock your creativity, and savor the joy of crafting delectable dishes
                with Kitchen-Master, your go-to recipe haven.
            </p>
            <div id="srh">
                <SearchBar/>
            </div>
        </div>
        <hr id="hr1"/>
        <div id="top-recipes">
            <h2>Top Recipes</h2>
            <hr id="hr1"/>
            <div id = "r-card-area" className="flex">
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
                <div id = "r-card">
                    <AllRcard/>
                </div>
            </div>
        </div>
        <Footerdark/>
    </div>
  );
}

export default App;
