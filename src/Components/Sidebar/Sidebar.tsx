import "./Sidebar.css";
import HospitalList from "../../assets/hospitals.json";
const navList = [
  {
    id: 1,
    activeTab: false,
    name: "overview",
    title: "Overview",
  },
  {
    id: 2,
    activeTab: false,
    name: "lof",
    title: "List of Patients",
  },
  {
    id: 3,
    activeTab: false,
    name: "p&b",
    title: "Payments & Billing",
  },
];
function Sidebar({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (activeTabName: string) => void;
}) {
  return (
    <aside className="sidebar">
      <h1 className="logo">HMS</h1>
      <div className="hospital-search">
        <input
          list="hospital-input-list"
          id="hospital-input"
          name="hospital-input"
          placeholder="Hospital Name →"
        />
        <datalist id="hospital-input-list">
          {HospitalList.map((hospital, index) => {
            return (
              <option value={hospital.name} key={index}>
                {hospital.location}
              </option>
            );
          })}
        </datalist>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <button className="navigation__btn navigation__btn_special">
              Add Hospital
            </button>
          </li>
          {navList.map((nav) => (
            <li key={nav.id}>
              <button
                className={
                  "navigation__btn " +
                  (activeTab === nav.name ? "navigation__btn_active" : "")
                }
                onClick={() => {
                  setActiveTab(nav.name);
                  localStorage.setItem("currentTab", nav.name);
                }}
              >
                {nav.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
