import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=";

export default {
  employees: function(amount) {
    return axios.get(BASEURL + amount)
  }
};
