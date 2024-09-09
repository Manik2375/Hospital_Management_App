import "./Main.css";
import HomePage from "./HomePage/HomePage";
import ListOfPatients from "./ListOfPatients/ListOfPatients";


function MainSection({activeTab, currentHospital}: {activeTab: string, currentHospital: string}) {
    return (
        <div className="main-container">
            {activeTab === "overview"? <HomePage currentHospital={currentHospital} />: <ListOfPatients currentHospital={currentHospital} />}
        </div>
    )
}
export default MainSection;