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

// GST details by GST number
export const getGstDetails = async (gstNumber: string) => {
    try {
        const response = await axios.get(`auth/admin/gst-details/${gstNumber}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};



export const updateCustomerProfilePicture = (id: string, file: File | Blob) => {
    const formData = new FormData();
    formData.append("profilePicture", file);
    return axios
        .put(`auth/admin//customer/${id}/pf`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response: any) => response?.data)
        .catch((error: any) => { throw error; });
};


// BLOG BY ID ... 
export async function fetchBlogById(id: string) {
    try {
        const response = await axios.get(`/auth/superadmin/blog/${id}`);
        console.log('API Response:', { response });
        return response.data
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
    }
}

// send otp 
export const sendOtp = async (data: any) => {
    try {
        const response = await axios.post("/send-sms", {
            params :{
                company_name : data.company_name,
                to: data.phone_number,
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
