// import data

import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../datas/data";

//console.log("data", data);

// Variables
//let datas = [];

/*export const getDatas = async   (cat, id) => {

    let result;
    
    switch(cat) {
        case "main_data" :
            result = await  getUserInfos(id);
            console.log("result", result);
           
          
            break;

        case "activity" :
            result = data.USER_ACTIVITY.find((user) => user.id == id);
            break;

        case "average_sessions" :
            result = data.USER_AVERAGE_SESSIONS.find((user) =>  user.id == id);
            break;

        case "performance" :
            result = data.USER_PERFORMANCE.find((user) => user.id == id);
            break;

        default: 
            console.log(`${cat} not found`);
    }
    //console.log("fetch data", datas)
    return result;
}*/


/**
 * Get user informations
 * @param {number} id user's Id
 * @returns {object} response data
 */


export const getUserInfos =  async (id) => {
  
    try { 
            const res = 
            USER_MAIN_DATA
                .filter(user => user.id == id)
                .shift()
             
            //const res =  USER_MAIN_DATA.find((user)=> user.id == id);
            console.log("data user", res);
            return  res; 
        } 
        
    catch(err) {
        console.log(err);
    }
}

/**
 * Get user activity
 * @param {number} id 
 * @returns 
 */
export const getUserActivity = async (id) => {
    try {
        const res =  USER_ACTIVITY.find((user) => user.id == id);
        return res;
    }
    catch(err) {
        console.log(err);
    }
}

/**
 * Get session of user
 * @param {*} id 
 * @returns 
 */
export const getUserAverageSessions = (id) => {
    try {
        const res = USER_AVERAGE_SESSIONS.find((user) => user.id == id);
        return {datas : res};

    }
    catch (err)  {
        console.log(err);
    }
}

/**
 * Get performance of user
 * @param {*} id 
 * @returns 
 */
export const getUserPerf = (id) => {
    try {
        const res = USER_PERFORMANCE.find((user) => user.id == id);
        return res;
    }
    catch(err) {
        console.log(err)
    }
}