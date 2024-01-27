import { DataTableDemo } from "@/components/data-table";
import { columns } from "./columns";
import { baseUrl } from "@/lib/utils";

const OrdersPage = async () => {
  const getOrders = async () => {
    try {
      const response = await fetch(`${baseUrl}orders`, {
        cache: "no-cache",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
  const orders = await getOrders();
  console.log(orders);
  return (
    <main className="w-full">
      <h1 className="font-bold">Orders</h1>
      <DataTableDemo
        columns={columns}
        data={orders?.orders}
        filterConstraint="userName"
      />
    </main>
  );
};

export default OrdersPage;
