import axios from "axios";

const GET200USERS = "https://randomuser.me/api/?results=200&nat=us";

const API =  {
  getEmployees: function () {
    console.log("API, line 7");
    const userList = axios.get(GET200USERS);
    console.log("userList:", userList);
    return userList;
  }
}

export default API;