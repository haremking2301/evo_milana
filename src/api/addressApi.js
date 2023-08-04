import axios from "axios";

const addressApi = {
    getAllLocal: async function() {
        try {
            const res = await axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")
            return res.data
        } catch (err) {
            console.log(err);
        }
    },
}

export default addressApi;