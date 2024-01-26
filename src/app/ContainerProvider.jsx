"use client";
import { usePathname } from "next/navigation";
import AdminContainer from "@/components/shared/AdminContainer";

const ContainerProvider = ({ children }) => {
  const path = usePathname();
  if (path !== "/login") return <AdminContainer children={children} />;
  return <>{children}</>;
};

export default ContainerProvider;
