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

/**
 * @description retrieves a user's activity day by day with kilograms and calories.
 * @param {number} id 
 * @returns 
 */
export async function getUserActivity(id) {
    try {
      const response = await axios.get(`http://localhost:3000/user/${id}/activity`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

/**
 * @description retrieves the average sessions of a user per day. The week starts on Monday.
 * @param {number} id 
 * @returns 
 */
export async function getUserAverageSessions(id) {
    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
        console.log(response);
        return response.data;
      } catch (error) {
        console.error(error);
      }
}