import { useApi } from "./components/useApi";

export default function UsersPage() {
  const { data, loading, error } = useApi<{
    users: { id: number; name: string }[];
  }>("/api/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className="list-disc pl-5">
      {data?.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
