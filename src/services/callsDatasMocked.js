// import data

import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../datas/data";


/**
 * Get user informations
 * @param {number} id user's Id
 * @returns {object} response data
 */

/*export const getUserInfos =  async (id) => {
    
    try { 
            const infos = 
            USER_MAIN_DATA
                .filter(user => user.id == id)
                .shift();

            //console.log("data user", infos);
           return infos;
           
        } 
        
    catch(err) {
        console.log(err);
    }
}*/

/**
 * Get user activity
 * @param {number} id 
 * @returns {object} response data
 */
export const getUserActivity = async (id) => {
    try {
        const dataActivity =  
                    USER_ACTIVITY
                        .filter(user => user.userId == id)
                        .shift();

        //console.log("data activity", dataActivity);
        return dataActivity;
        
    }
    catch(err) {
        console.log(err);
    }
}


/**
 * Get session of user
 * @param {number} id 
 * @returns {object} response data
 */
export const getUserAverageSessions = async (id) => {
    try {
        const infos = USER_AVERAGE_SESSIONS.find((user) => user.userId == id);
        console.log("data average", infos);
        return infos;

    }
    catch (err)  {
        console.log(err);
    }
}

/**
 * Get performance of user
 * @param {number} id of user
 * @returns {object} response data
 */
export const getUserPerf = async (id) => {
    try {
        const infos = USER_PERFORMANCE.find((user) => user.userId == id);
        return infos;
    }
    catch(err) {
        console.log(err)
    }
}


