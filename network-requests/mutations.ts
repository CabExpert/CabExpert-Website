import { useMutation } from "react-query";
import { AdminSignup } from "./apis";

export const useAdminSignup = () => {
    return useMutation((data: any) => AdminSignup(data));
};