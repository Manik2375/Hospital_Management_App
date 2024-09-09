import "./ListOfPatients.css";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
} from "@mui/x-data-grid";
import PatientData from "../../../assets/patients.json";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";


const columns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "age", headerName: "Age", flex: 1 },
  { field: "sex", headerName: "Gender", flex: 1 },
  { field: "conditionName", headerName: "Condition", flex: 1 },
  { field: "conditionState", headerName: "Condition Level", flex: 1 },
  { field: "bedNumber", headerName: "Bed Number", flex: 1 },
];

function ListOfPatients({currentHospital}: {currentHospital: string}) {
  let patientsListRow: GridRowsProp;

  if (currentHospital == "Hospital1") {
    patientsListRow = PatientData.Hospital1
  } else {
    patientsListRow = PatientData.Hospital2
  }

  return (
    <section className="listOfPatients">
      <div className="listOfPatientsContainer">
        <DataGrid
          checkboxSelection
          disableRowSelectionOnClick
          rows={patientsListRow}
          columns={columns}
        />
      </div>
     <div className="listOfPatient-btn-container">
     <Stack direction="row" spacing={2}>
        <Button variant="contained" color="success">
          Edit
        </Button>
        <Button variant="outlined" color="error">
          Delete
        </Button>
      </Stack>
     </div>
    </section>
  );
}
export default ListOfPatients;
