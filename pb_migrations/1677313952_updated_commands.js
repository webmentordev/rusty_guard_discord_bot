migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dslef6r2q4jhh43")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v9j6et2c",
    "name": "message",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dslef6r2q4jhh43")

  // remove
  collection.schema.removeField("v9j6et2c")

  return dao.saveCollection(collection)
})
