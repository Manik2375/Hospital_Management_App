import "./Homepage.css";
import Card from "../components/Card/Card";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { LineChart } from "@mui/x-charts";
import Patients from "../../../assets/patients.json";
import oldPatients from "../../../assets/oldPatients.json";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "age", headerName: "Age", flex: 1 },
  { field: "sex", headerName: "Gender", flex: 1 },
  { field: "conditionState", headerName: "Condition Level", flex: 1 },
  { field: "bedNumber", headerName: "Bed Number", flex: 1 },
];

function HomePage({ currentHospital }: { currentHospital: string }) {
  let patientsListRow: GridRowsProp = [];
  let oldPatientsArr, oldPatientsDatesArr;
  if (currentHospital === "Hospital1") {
    patientsListRow = Patients.Hospital1;
    oldPatientsArr = Object.values(oldPatients[0]);
    oldPatientsDatesArr = Object.keys(oldPatients[0]);
  } else {
    patientsListRow = Patients.Hospital2;
    oldPatientsArr = Object.values(oldPatients[1]);
    oldPatientsDatesArr = Object.keys(oldPatients[1]);
  }

  return (
    <section className="homepage">
      <h2 className="main-heading">Overview</h2>
      <div className="homepage-content">
        <div className="cards-container">
          <Card title="Patients" value={55} />
          <Card title="Beds occupied" value={28} />
          <Card title="Doctors available" value={9} />
        </div>
        <div style={{ height: 300 }} className="patients-table">
          <DataGrid rows={patientsListRow} columns={columns} />
        </div>
        <div className="patients-chart">
          <LineChart
            xAxis={[{ scaleType: "point", data: oldPatientsDatesArr }]}
            series={[
              {
                data: oldPatientsArr,
                color: "#002857",
              },
            ]}
          />
          <p className="patients-chart-description">
            Number of patients per day
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
