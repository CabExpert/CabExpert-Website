import axios from 'axios';


 export const getUserById = async (id: string) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching user');
        }
    }
