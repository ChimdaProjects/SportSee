import axios from "axios";

/**
 * @description Retrieve the main user info (first name, last name, today score)
 * @param {number} id id of user
 * @returns {object} response data
 */
export async function getUserInfos(id) {
    try {
      const response = await axios.get(`http://localhost:3000/user/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

