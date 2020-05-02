import Axios from "axios";

export default Axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID G14OU-dUWpS3a1akO7ctWVQvwHnT64iC8lAQ8XEQNK8"
    }
});
