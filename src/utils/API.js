import axios from "axios";

const GET200USERS = "https://randomuser.me/api/?results=200&nat=us";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getEmployees: query => axios.get(GET200USERS),
};
