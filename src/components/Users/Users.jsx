export default function Users() {
  const users = [
    { id: 1, name: "Prvi" },
    { id: 2, name: "Drugi" },
    { id: 3, name: "Treci" },
  ];

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
