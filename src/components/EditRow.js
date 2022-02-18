const EditRow = ({ editFormData, handleEditForm, handleCancel }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="First Name"
          name="firstname"
          value={editFormData.firstname}
          onChange={handleEditForm}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Last Name"
          name="lastname"
          value={editFormData.lastname}
          onChange={handleEditForm}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Email"
          name="email"
          value={editFormData.email}
          onChange={handleEditForm}
        />
      </td>
      <td>
        <select
          id="branch"
          name="branch"
          defaultValue="lahore"
          required="required"
          value={editFormData.branch}
          onChange={handleEditForm}
        >
          <option value="lahore">Lahore</option>
          <option value="islamabad">Islamabad</option>
        </select>
      </td>
      <td>
        <select
          id="role"
          name="role"
          defaultValue="student"
          required="required"
          value={editFormData.role}
          onChange={handleEditForm}
        >
          <option value="student">Student</option>
          <option value="learner">Learner</option>
        </select>
      </td>
      <td>
        <select
          id="status"
          name="status"
          defaultValue="0"
          required="required"
          value={editFormData.status}
          onChange={handleEditForm}
        >
          <option value="1">Active</option>
          <option value="0">Inactive</option>
        </select>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditRow;
