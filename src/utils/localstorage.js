export default function LocalStorage() {
   this.ls = window.localStorage;
}

LocalStorage.prototype.get = function(key) {
   if(typeof key !== "string") throw new Error("key must be a string");

   return JSON.parse(this.ls.getItem(key));
}

LocalStorage.prototype.set = function(key, payload) {
   const prevState = this.get(key);

   if(prevState) {
      payload = { ...prevState, ...payload } // merge prevState with payload overriding old matching fields
   }

   this.ls.setItem(key, JSON.stringify(payload));
}

LocalStorage.prototype.delete = function(key) {
   this.ls.removeItem(key);
}