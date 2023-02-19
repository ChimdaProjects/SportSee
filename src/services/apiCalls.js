import axios from "axios";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../datas/data";

// Url choosen by default from .env file
const baseURL = process.env.REACT_APP_BASE_URL;
// environment variable to select api data or mocked data
const envDatasMocked = process.env.REACT_APP_DATAS_MOCKED;

/**
 * @description Retrieve the main user info (first name, last name, today score)
 * @param {number} id id of user
 * @returns {object} response data
 */
export async function getUserInfos(id) {
    if (envDatasMocked === 'true') {
        try {
            const response =  
                        USER_MAIN_DATA
                            .filter(user => user.id == id)
                            .shift();
    
            return {data:response};
            
        }
        catch(err) {
            console.log(err);
        }
    } else {
        try {
            const response = await axios.get(`${baseURL}user/${id}`);
            return response.data;

        } catch (error) {
            console.error(error);
           
        }
    }
   
}

/**
 * @description retrieves a user's activity day by day with kilograms and calories.
 * @param {number} id 
 * @returns 
 */
export async function getUserActivity(id) {
    if (envDatasMocked === 'true') {

        try {
            const response =  
                        USER_ACTIVITY
                            .filter(user => user.userId == id)
                            .shift();
    
            return {data:response};
            
        }
        catch(err) {
            console.log(err);
        }

    } else {
        try {
            const response = await axios.get(`${baseURL}user/${id}/activity`);
            return response.data;

        } catch (error) {
        console.error(error);
        }
    }
}

/**
 * @description retrieves the average sessions of a user per day. The week starts on Monday.
 * @param {number} id 
 * @returns 
 */
export async function getUserAverageSessions(id) {
    if (envDatasMocked === 'true') {

        try {
            const response =  
                        USER_AVERAGE_SESSIONS
                            .filter(user => user.userId == id)
                            .shift();
            return {data:response};
            
        }
        catch(err) {
            console.log(err);
        }

    } else {
        try {
            const response = await axios.get(`${baseURL}user/${id}/average-sessions`);
            return response.data;

        } catch (error) {
            console.error(error);
        }
    }
}

/**
 * @description retrieves a user's performance (energy, endurance, etc.).
 * @param {number} id 
 * @returns 
 */
export async function getUserPerf(id) {
    if (envDatasMocked === 'true') {

        try {
            const response =  
                        USER_PERFORMANCE
                            .filter(user => user.userId == id)
                            .shift();
            return {data:response};
            
        }
        catch(err) {
            console.log(err);
        }
    } else {
    try {
        const response = await axios.get(`${baseURL}user/${id}/performance`);
        return response.data;

      } catch (error) {
        console.error(error);
      }
    }
}