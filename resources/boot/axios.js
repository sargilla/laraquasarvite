import axios from "axios";

export default axios.create({
    defaults: { withCredentials: true },
});
