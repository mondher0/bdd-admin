import { DataTableDemo } from "@/components/data-table";
import { columns } from "./columns";
import { baseUrl } from "@/lib/utils";

export default async function Home() {
  const getUsers = async () => {
    try {
      const response = await fetch(`${baseUrl}users`, {
        cache: "no-cache",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
  const users = await getUsers();
  return (
    <main className="w-full">
      <h1>Users</h1>
      <DataTableDemo columns={columns} data={users} filterConstraint="email" />
    </main>
  );
}
