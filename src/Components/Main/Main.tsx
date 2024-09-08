import "./Main.css";
import HomePage from "./HomePage/HomePage";
import ListOfPatients from "./ListOfPatients/ListOfPatients";


function MainSection({activeTab}: {activeTab: string}) {
    return (
        <div className="main-container">
            {activeTab === "overview"? <HomePage />: <ListOfPatients />}
        </div>
    )
}
export default MainSection;