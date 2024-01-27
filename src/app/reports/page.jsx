import { DataTableDemo } from "@/components/data-table";
import React from "react";
import { columns } from "./columns";
import { baseUrl } from "@/lib/utils";

const ReportsPage = async () => {
  // get reports
  const getReports = async () => {
    try {
      const response = await fetch(`${baseUrl}reports`, {
        cache: "no-cache",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const reports = await getReports();
  console.log(reports);
  return (
    <main className="w-full">
      <h1 className="font-bold">Reports</h1>
      <DataTableDemo
        columns={columns}
        data={reports.reports}
        filterConstraint="name"
      />
    </main>
  );
};

export default ReportsPage;
