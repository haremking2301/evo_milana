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
    }
}

export default evoMilanaApi;