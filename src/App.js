import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { nanoid } from "nanoid";
import { CssBaseline, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import DataTable from "./components/DataTable";
import data from "./users.json";
import { useState } from "react";
import AddUser from "./components/AddUser";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#F5F6FA",
    },
    primary: {
      main: "#0971f1",
    },
    error: {
      main: "#E44D4D",
    },
  },
});

function App() {
  const [users, setUsers] = useState(data);
  // const location = useLocation();
  // form data
  const [addFormData, setAddFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    branch: "",
    role: "",
    status: "",
  });
  // edit form data
  const [editFormData, setEditFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    branch: "",
    role: "",
    status: "",
  });

  const [editUserId, setEditUserId] = useState(null);

  // let location = useLocation();

  const handleForm = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    console.log(fieldName, fieldValue);

    const newFormData = { ...addFormData };

    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  // Form Submission
  const handleFormSubmission = (e) => {
    e.preventDefault();

    const newUser = {
      id: nanoid(),
      firstname: addFormData.firstname,
      lastname: addFormData.lastname,
      email: addFormData.email,
      branch: addFormData.branch,
      role: addFormData.role,
      status: addFormData.status,
    };

    const newUsers = [...users, newUser];
    setUsers(newUsers);
  };

  // Edit Form Submission
  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedUser = {
      id: editUserId,
      firstname: editFormData.firstname,
      lastname: editFormData.lastname,
      email: editFormData.email,
      branch: editFormData.branch,
      role: editFormData.role,
      status: editFormData.status,
    };

    const newUsers = [...users];

    const index = users.findIndex((user) => user.id === editedUser.id);

    newUsers[index] = editedUser;

    setUsers(newUsers);
    setEditUserId(null);
  };

  const handleEditForm = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEdit = (e, user) => {
    e.preventDefault();
    setEditUserId(user.id);

    const formValues = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      branch: user.branch,
      role: user.role,
      status: user.status,
    };

    setEditFormData(formValues);
  };

  const handleCancel = () => {
    setEditUserId(null);
  };

  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          pr: 7,
          pl: 7,
          pb: 7,
          pt: 2,
          backgroundColor: "#fff",
          minHeight: "100vh",
        }}
      >
        <Router>
          <Grid item xs={12}>
            <p></p>
            <Switch>
              <Route path="/add-user">
                <AddUser
                  handleForm={handleForm}
                  handleFormSubmission={handleFormSubmission}
                />
              </Route>
              <Route path="/" exact>
                <DataTable
                  users={users}
                  handleForm={handleForm}
                  handleFormSubmission={handleFormSubmission}
                  editUserId={editUserId}
                  handleEdit={handleEdit}
                  editFormData={editFormData}
                  handleEditForm={handleEditForm}
                  handleEditFormSubmit={handleEditFormSubmit}
                  handleCancel={handleCancel}
                />
              </Route>
            </Switch>
          </Grid>
        </Router>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
