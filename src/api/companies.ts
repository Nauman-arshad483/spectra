import { useQuery } from "@tanstack/react-query";

import { Company } from "src/types";

import data from "../api/companies.json";

export function useCompanies() {
  // console.log("data is", data);
  return useQuery(["companyData"], () => Promise.resolve(data as Company[]));
}
