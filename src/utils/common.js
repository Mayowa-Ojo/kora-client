import shortid from "shortid";

export const generateUniqueId = () => {
   return shortid.generate();
}