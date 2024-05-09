import axios from "../axios";
import { SetupYourBusiness } from "../types";

export const AdminSignup = (data: any) =>
    axios
        .post("/auth/admin/signup", data)
        .then((response: { data: any; }) => response?.data)
        .catch((error: any) => {
            throw error;
        });


export const updateSetupNewBusiness = (data: SetupYourBusiness, id: string) => {
    try {
        console.log({ id })
        const axiosConfig = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `/auth/admin/user-setup-business/${id}`,
            data: data
        };
        console.log(axios.request(axiosConfig))
        return axios.request(axiosConfig);
    } catch (error: any) {
        console.log({ error })
        throw error
    }
};

export const uploadCompanyPorfile = async (selectedFile: any) => {
    const formData = new FormData();
    formData.append("files", selectedFile);
    return await axios
        .post(`/auth/admin/profile`, formData, {
            withCredentials: false,
        })
        .then((response: any) => {
            console.log({ response });
            return response?.data;
        })
        .catch((error: any) => {
            console.log({ error });
            return error;
        });
};


export const createLead = (data: any) =>
    axios
        .post("/auth/lead", data)
        .then((response: { data: any; }) => response?.data)
        .catch((error: any) => {
            throw error;
        });


export const getAllBlogs = async () => {
    try {
        const response = await axios.get("/auth/superadmin/blogs");
        return response.data;
    } catch (error) {
        throw new Error('Error fetching blogs');
    }
};