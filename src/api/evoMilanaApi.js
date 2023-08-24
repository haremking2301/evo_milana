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
    getDataLove: async function(params) {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}products`, {
                params: {
                    ...params,
                }
            })
            return res.data
        } catch (err) {
            console.log(err);
        }
    },
    getAllAdress: async function(params) {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}address`, {
                params: {
                    ...params,
                }
            })
            return res.data
        } catch (err) {
            console.log(err);
        }
    },
    getAllOrders: async function(params) {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}orders`, {
                params: {
                    ...params,
                }
            })
            return res.data
        } catch (err) {
            console.log(err);
        }
    },
    getAllComments: async function(params) {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}comments`, {
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
    },
    postDataAddress: async function(data) {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}address`, data)
        } catch (err) {
            console.log(err);
        }
    },
    postDataOrders: async function(data) {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}orders`, data)
        } catch (err) {
            console.log(err);
        }
    },
    postDataCommentrs: async function(data) {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}comments`, data)
        } catch (err) {
            console.log(err);
        }
    },
    changePasswordRegister: async function(data, id) {
        try {
            await axios.patch(`${process.env.REACT_APP_API_URL}users/${id}`, { password: `${data}` })
        } catch (err) {
            console.log(err);
        }
    }
}

export default evoMilanaApi;