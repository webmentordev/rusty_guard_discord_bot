migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dslef6r2q4jhh43")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ahh1fjdb",
    "name": "server",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "e2gh1wp7gvmb7r9",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dslef6r2q4jhh43")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ahh1fjdb",
    "name": "server",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "e2gh1wp7gvmb7r9",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
