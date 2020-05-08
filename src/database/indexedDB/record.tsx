import Schema from "./schema";

export type recordObj = {
  [key: string]: any;
};

class Record<T> {
  public db: IDBDatabase;
  public schema: Schema;

  constructor(db: IDBDatabase, schema: Schema) {
    this.db = db;
    this.schema = schema;
  }

  create = (obj: recordObj) => {
    return new Promise((resolve, reject) => {
      let transaction: IDBTransaction;
      let objStore: IDBObjectStore;
      let req: IDBRequest;

      transaction = this.db.transaction([this.schema.name], "readwrite");
      objStore = transaction.objectStore(this.schema.name);
      req = objStore.add(obj);
      req.onsuccess = (e: any) => {
        resolve({ success: true, obj: e.target.result });
      };
      req.onerror = (e: any) => {
        reject({ success: false, obj: e.target.result });
      };
    });
  };

  read = (Id: string) => {
    return new Promise((resolve, reject) => {
      let transaction: IDBTransaction;
      let objStore: IDBObjectStore;
      let index: IDBIndex;
      let req: IDBRequest;

      transaction = this.db.transaction([this.schema.name], "readwrite");
      objStore = transaction.objectStore(this.schema.name);
      index = objStore.index(this.schema.indexName);
      req = index.get(Id);
      req.onsuccess = function (e: any) {
        resolve({ success: true, obj: e.target.result });
      };
      req.onerror = function (e: any) {
        reject({ success: false, obj: e.target.result });
      };
    });
  };

  update = (obj: recordObj) => {
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
    return new Promise((resolve, reject) => {
      var transaction: IDBTransaction;
      var objStore: IDBObjectStore;
      let req: IDBRequest;

      transaction = this.db.transaction([this.schema.name], "readwrite");
      objStore = transaction.objectStore(this.schema.name);
      req = objStore.delete(id);
      req.onsuccess = function (e: any) {
        resolve({ success: true, obj: e.target.result });
      };
      req.onerror = function (e: any) {
        reject({ success: false, obj: e.target.result });
      };
    });
  }
}

export default Record;
