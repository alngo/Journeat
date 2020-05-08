class Schema {
  name: string;
  indexName: string;
  keyPath: string;
  public storeOptions?: IDBObjectStoreParameters;
  public indexOptions?: IDBIndexParameters;

  constructor(
    name: string,
    indexName: string,
    keyPath: string,
    storeOptions?: IDBObjectStoreParameters,
    indexOptions?: IDBIndexParameters
  ) {
    this.name = name;
    this.indexName = indexName;
    this.keyPath = keyPath;
    this.storeOptions = { keyPath: keyPath, ...storeOptions };
    this.indexOptions = indexOptions;
  }
}

export default Schema;
