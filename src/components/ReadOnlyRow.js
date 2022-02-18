const ReadOnlyRow = ({ item, handleEdit }) => {
  return (
    <tr key={item.id}>
      <td>{item.firstname}</td>
      <td>{item.lastname}</td>
      <td>{item.email}</td>
      <td>{item.branch}</td>
      <td>{item.role}</td>
      <td>{item.status}</td>
      <td>
        <button type="button" onClick={(e) => handleEdit(e, item)}>
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
