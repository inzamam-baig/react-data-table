import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const AddUser = ({ handleForm, handleFormSubmission }) => {
  return (
    <>
      <Link to="/">Back</Link>
      <h4>Please fill in following information to add a new user</h4>
      <form onSubmit={handleFormSubmission}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <label htmlFor="firstname">First Name</label>
            <br></br>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              onChange={handleForm}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <label htmlFor="lastname">Last Name</label>
            <br></br>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              onChange={handleForm}
              required
            />
          </Grid>

          {/* second row */}
          <Grid item xs={6}>
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleForm}
              required
            />
          </Grid>

          <Grid item xs={6}>
            <label htmlFor="branch">Branch</label>
            <br></br>
            <select
              id="branch"
              name="branch"
              onChange={handleForm}
              defaultValue="lahore"
              required="required"
            >
              <option value="lahore">Lahore</option>
              <option value="islamabad">Islamabad</option>
            </select>
          </Grid>

          {/* Third Row */}
          <Grid item xs={6}>
            <label htmlFor="role">Role</label>
            <br></br>
            <select
              id="role"
              name="role"
              onChange={handleForm}
              defaultValue="student"
              required="required"
            >
              <option value="student">Student</option>
              <option value="learner">Learner</option>
            </select>
          </Grid>

          <Grid item xs={6}>
            <label htmlFor="status">Status</label>
            <br></br>
            <select
              id="status"
              name="status"
              onChange={handleForm}
              defaultValue="0"
              required="required"
            >
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </Grid>

          <Grid item xs={12}>
            <button type="submit">Create</button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AddUser;
