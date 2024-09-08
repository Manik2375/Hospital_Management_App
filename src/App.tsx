import './App.css'
import Sidebar from "./Components/Sidebar/Sidebar";
import MainSection from './Components/Main/Main';
import { useState } from 'react';

let storedTab = localStorage.getItem("currentTab") || "";

if (!storedTab) {
  storedTab = "overview";
  localStorage.setItem("currentTab", storedTab);
}


function App() {
  const [currentTab, setCurrentTab] = useState(storedTab);
  const [hospital, setHospital] = useState("Hospital1")

  return (
    <>
      <Sidebar activeTab={currentTab}   setActiveTab={setCurrentTab} setCurrentHospital={setHospital}/>
      <MainSection activeTab={currentTab} currentHospital={hospital}/>
    </>
  )
}
export default App
