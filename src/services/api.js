import axios from "axios";

 export const getActivitys = async () => {
    try {
      const response = await axios.get("https://challengecux-production.up.railway.app/activitys");
      return response.data
    } catch (error) {
      console.error(error);
    }
  };

   export const postMessage = async () => {
    try {
      const response = await axios.post("https://challengecux-production.up.railway.app/chat");
      return response.data
    } catch (error) {
      console.error(error);
    }
  };
