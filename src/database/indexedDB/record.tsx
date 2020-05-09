import Schema from "./schema";
import { T_KeyStringObj } from "types/";

class Record<T> {
  public db: IDBDatabase;
  public schema: Schema;

  constructor(db: IDBDatabase, schema: Schema) {
    this.db = db;
    this.schema = schema;
  }

  reqPromise = (req: IDBRequest) => {
    return new Promise((resolve, reject) => {
      req.onsuccess = (e: any) => {
        resolve({ success: true, obj: e.target.result });
      };
      req.onerror = (e: any) => {
        reject({ success: false, obj: e.target.result });
      };
    });
  };

  create = (obj: T_KeyStringObj) => {
    let transaction: IDBTransaction;
    let objStore: IDBObjectStore;
    let req: IDBRequest;

    transaction = this.db.transaction([this.schema.name], "readwrite");
    objStore = transaction.objectStore(this.schema.name);
    req = objStore.add(obj);
    return this.reqPromise(req);
  };

  read = (Id: string) => {
    let transaction: IDBTransaction;
    let objStore: IDBObjectStore;
    let index: IDBIndex;
    let req: IDBRequest;

    transaction = this.db.transaction([this.schema.name], "readwrite");
    objStore = transaction.objectStore(this.schema.name);
    index = objStore.index(this.schema.indexName);
    req = index.get(Id);
    return this.reqPromise(req);
  };

  update = (obj: T_KeyStringObj) => {
    return new Promise((resolve, reject) => {
      let transaction: IDBTransaction;
      let objStore: IDBObjectStore;
      let req: IDBRequest;
      let index: IDBIndex;

      transaction = this.db.transaction([this.schema.name], "readwrite");
      objStore = transaction.objectStore(this.schema.name);
      index = objStore.index(this.schema.indexName);
      req = index.get(obj[this.schema.keyPath]);
      req.onsuccess = function (e: any) {
        objStore.put(obj);
        resolve({ success: true, obj: e.target.result });
      };
      req.onerror = function (e: any) {
        reject({ success: false, obj: e.target.result });
      };
    });
  };

  delete(id: string) {
    var transaction: IDBTransaction;
    var objStore: IDBObjectStore;
    let req: IDBRequest;

    transaction = this.db.transaction([this.schema.name], "readwrite");
    objStore = transaction.objectStore(this.schema.name);
    req = objStore.delete(id);
    return this.reqPromise(req);
  }
}

export default Record;
