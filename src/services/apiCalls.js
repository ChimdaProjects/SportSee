import axios from "axios";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../datas/data";


const baseURL = process.env.REACT_APP_BASE_URL;
console.log("url", baseURL)

const envDatasMocked = "true";
//process.env.REACT_APP_DATAS_MOCKED;
console.log("env", envDatasMocked)
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
    
            console.log("response user info", response);
            return {data:response};
            
        }
        catch(err) {
            console.log(err);
        }
    } else {
        try {
            const response = await axios.get(`http://localhost:3000/user/${id}`);
            //console.log(response);
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
    
            console.log("response user info", response);
            return {data:response};
            
        }
        catch(err) {
            console.log(err);
        }
    } else {
        try {
        const response = await axios.get(`http://localhost:3000/user/${id}/activity`);
        //console.log(response);
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
    
            console.log("response user info", response);
            return {data:response};
            
        }
        catch(err) {
            console.log(err);
        }
    } else {
        try {
            const response = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
            //console.log(response);
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
    
            console.log("response user info", response);
            return {data:response};
            
        }
        catch(err) {
            console.log(err);
        }
    } else {
    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/performance`);
        //console.log(response);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
}