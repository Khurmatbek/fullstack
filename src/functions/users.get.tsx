import axios from "axios"

export const userGetFunction = async () => {
    try {
        const response = await axios.get("/api/users");
        const data = await response.data;
        return data
    } catch (error) {
        console.error("Failed to fetch users:", error);
        throw error;
    }
}


export const userCReateFunction = async (data: { name: string, email: string, password: string }) => {
    try {
        const response =await axios.post("api/users", {
            name: data.name,
            email: data.email,
            password: data.password
        });
        return response

    } catch (error) {
        throw error
    }
}