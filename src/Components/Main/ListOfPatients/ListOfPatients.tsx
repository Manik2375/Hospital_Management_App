import "./ListOfPatients.css";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
} from "@mui/x-data-grid";
import PatientData from "../../../assets/Hospitals/Hospital1/patients.json";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const patientsListRow: GridRowsProp = PatientData;

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "age", headerName: "Age", flex: 1 },
  { field: "sex", headerName: "Gender", flex: 1 },
  { field: "conditionName", headerName: "Condition", flex: 1 },
  { field: "conditionState", headerName: "Condition Level", flex: 1 },
  { field: "bedNumber", headerName: "Bed Number", flex: 1 },
];

function ListOfPatients() {

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
