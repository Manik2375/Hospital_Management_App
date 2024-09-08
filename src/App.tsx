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

  return (
    <>
      <Sidebar activeTab={currentTab}   setActiveTab={setCurrentTab} />
      <MainSection activeTab={currentTab}/>
    </>
  )
}
export default App
