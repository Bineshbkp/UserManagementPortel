const UserList = ({ users }) => (
  <table className="bg-white p-6 rounded-xl shadow 
                w-full max-w-6xl border-black">
    <thead>
      <tr>
        <th>Sl.No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
      </tr>
    </thead>
    <tbody>
      {users.map((u, i) => (
        <tr key={u.id}>
          <td>{i + 1}</td>
          <td>{u.name}</td>
          <td>{u.email}</td>
          <td>{u.mobile}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserList;
