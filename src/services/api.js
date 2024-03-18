import axios from "axios";

const getActivitys = async () => {
    try {
      const response = await axios.get("https://api.example.com/data");
      return response.data
    } catch (error) {
      console.error(error);
    }
  };
