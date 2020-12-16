import low from "lowdb";
import { nanoid } from "nanoid";
import LocalStorage from "lowdb/adapters/LocalStorage";

const adapter = new LocalStorage("drafts");
const db = low(adapter);

db.defaults({ drafts: [] }).write();

export function createDraft(doc) {
   try {
      const newDoc = {
         ...doc,
         _id: nanoid(10),
         createdAt: new Date().toISOString(),
         updatedAt: new Date().toISOString()
      }
      const result = db.get("drafts")
         .push(newDoc)
         .write();

      return result;
   } catch (err) {
      console.error("[Error] --lowdb: ", err);
   }
}

export function updateDraft(query, update) {
   try {
      const result = db.get("drafts")
      .find(query)
      .assign({...update, updatedAt: new Date().toISOString()})
      .write();
      
      console.log("[DEBUG] result: ", result)
      return result
   } catch (err) {
      console.error("[Error] --lowdb: ", err);
   }
}

export function findDraft(query) {
   try {
      const result = db.get("drafts")
         .find(query)
         .value();

      return result;
   } catch (err) {
      console.error("[Error] --lowdb: ", err);
   }
}

export function deleteDraft(query) {
   try {
      const result = db.get("drafts")
         .remove(query)
         .write();

      return result;
   } catch (err) {
      console.error("[Error] --lowdb: ", err);
   }
}

