import ItemCard from "@/components/ItemCard";
import { baseUrl } from "@/lib/utils";

const OrderDetailsPage = async ({ params }) => {
  const { id } = params;
  console.log(id);

  // get order details
  const getOrderDetails = async () => {
    try {
      const response = await fetch(`${baseUrl}orders/order/${id}`, {
        cache: "no-cache",
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const orderDetails = await getOrderDetails();
  console.log(orderDetails);
  console.log(orderDetails?.order?.orderItems);

  return (
    <div className="w-full">
      <div className="container w-full">
        <p className="font-bold">Order Details</p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center mt-10">
        {orderDetails?.order?.orderItems.map((item, index) => {
          return <ItemCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default OrderDetailsPage;
