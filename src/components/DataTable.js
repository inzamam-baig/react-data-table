import { Link } from "react-router-dom";
import EditRow from "./EditRow";
import ReadOnlyRow from "./ReadOnlyRow";

const DataTable = ({
  users,
  handleForm,
  handleFormSubmission,
  editUserId,
  handleEdit,
  editFormData,
  handleEditForm,
  handleEditFormSubmit,
  handleCancel,
}) => {
  return (
    <>
      <form onSubmit={handleEditFormSubmit}>
        <Link to="/add-user">Add User</Link>
        <table className="styled-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Branch</th>
              <th>Level</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <>
                {editUserId === item.id ? (
                  <EditRow
                    editFormData={editFormData}
                    handleEditForm={handleEditForm}
                    handleCancel={handleCancel}
                  />
                ) : (
                  <ReadOnlyRow item={item} handleEdit={handleEdit} />
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>
    </>
  );
};

export default DataTable;
