import Schema from "./schema";

class Database {
  db?: IDBDatabase;
  name: string;
  schemas: Array<Schema>;

  constructor(name: string, schemas: Array<Schema>) {
    this.name = name;
    this.schemas = schemas;
  }

  initialize = () => {
    return new Promise((resolve, reject) => {
      let req: IDBOpenDBRequest;

      if (window.indexedDB) {
        req = window.indexedDB.open(this.name);
        req.onupgradeneeded = this.addSchemas;
        req.onsuccess = (e: any) => {
          this.db = e.target.result;
          resolve({ success: true, db: this.db });
        };
        req.onerror = (e: any) => {
          console.error("IndexedDB is not available");
          reject({ success: false, db: e.target.result });
        };
      }
    });
  };

  addSchemas = (e: any) => {
    return new Promise((resolve, reject) => {
      let schema: Schema;

      this.db = e.target.result;
      try {
        for (let index in this.schemas) {
          let objStore: IDBObjectStore;
          schema = this.schemas[index];
          objStore = e.target.result.createObjectStore(
            schema.name,
            schema.storeOptions
          );
          if (schema.indexName && schema.keyPath)
            objStore.createIndex(
              schema.indexName,
              schema.keyPath,
              schema.indexOptions
            );
        }
        resolve({ success: true, db: this.db });
      } catch (error) {
        reject({ success: false, db: this.db, error: error });
      }
    });
  };

  resetDB = () => {
    if (this.db) this.db.close();
    window.indexedDB.deleteDatabase(this.name);
    this.initialize();
  };
}

export default Database;
