import LocalStorage from "./localstorage";

const ls = new LocalStorage();

/**
 * Injects the authorization header on outgoing request to protected routes
 * @param {object} headers - AxiosRequestConfig.headers [request headers]
 */
export const injectAuthHeader = (headers) => {
   const { token } = ls.get("user") || {};

   if(!token) {
      console.warn("[WARNING]: no auth token found");
      return;
   }

   headers["Authorization"] = `Bearer ${token}`;
}