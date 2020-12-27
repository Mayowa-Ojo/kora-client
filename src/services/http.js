import axios from "axios";
import { injectAuthHeader } from "../utils/auth";
import router from "../router";
import store from "../store";
import { MUTATIONS } from "../constants/store";
import LocalStorage from '../utils/localstorage';


const ls = new LocalStorage();

const interceptExpiredTokenError = async (err) => {
   if(err.response.status === 401) {
      ls.delete("user");
      ls.delete("drafts");

      router.push("/k")
   }
}

// Request interceptor - add authorization header to every request
axios.interceptors.request.use((config) => {
   if(config.url.indexOf("/auth") != -1) return config;

   injectAuthHeader(config.headers);
   return config;
}, (err) => {
   return Promise.reject(err)
});

// Response interceptor
axios.interceptors.response.use((response) => {
   return response;
}, (err) => {
   // redirect to login
   return interceptExpiredTokenError(err);
})


/**
 * Make an api request to the backend server
 * @param {string} endpoint - api request endpoint
 * @param {object} options - api request options {e.g method: "POST"}
 */
export default async function httpRequest(endpoint, { method, ...options }) {
   try {
      if (!endpoint || typeof endpoint !== "string") throw new Error("Error: invalid endpoint");

      const response = await axios({
         method: method || "GET",
         url: endpoint,
         baseURL: `${process.env.VUE_APP_API_BASE_URL}v${process.env.VUE_APP_API_VERSION}`,
         withCredentials: true,
         ...options
      });

      return response.data;
   } catch(err) {
      store.commit(MUTATIONS.SET_STATUS, "error");
      store.commit(MUTATIONS.SET_TOAST_META, { 
         content: "Oops! something went wrong. Please try again",
         type: "error"
      });
      store.commit(MUTATIONS.SET_TOAST_ACTIVE);

      if(err.response) {
         console.error(`Error: --http: ${JSON.stringify(err.response.data)}`);
         return;
      }
      console.error(`Error --http: \n ${err}`);
   }
}