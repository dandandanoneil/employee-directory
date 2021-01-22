import axios from "axios";

const GET100USERS = "https://randomuser.me/api/?results=100&nat=us";

const API =  {
  getEmployees: function () {
    return axios.get(GET100USERS);
  }
}

export default API;