import axios from "axios";

const evoMilanaApi = {
    getItemProducts: async function(params) {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}products`, {
                params: {
                    ...params,
                }
            })
            return res
        } catch (err) {
            console.log(err);
        }
    },
    getItemDetails: async function(id, params) {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}products/${id}`, {
                params: {
                    ...params,
                }
            })
            return res
        } catch (err) {
            console.log(err);
        }
    },
    getDataUsers: async function(params) {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}users`, {
                params: {
                    ...params,
                }
            })
            return res.data
        } catch (err) {
            console.log(err);
        }
    },
    getDataNews: async function(params) {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}news`, {
                params: {
                    ...params,
                }
            })
            return res.data
        } catch (err) {
            console.log(err);
        }
    },
    getDataLove: async function(key, params) {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}${key}`, {
                params: {
                    ...params,
                }
            })
            return res.data
        } catch (err) {
            console.log(err);
        }
    },
    postDataUsersRegister: async function(data) {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}users`, data)
        } catch (err) {
            console.log(err);
        }
    }
}

export default evoMilanaApi;