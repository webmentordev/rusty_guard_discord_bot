migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e2gh1wp7gvmb7r9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "esb3jsej",
    "name": "guild_id",
    "type": "number",
    "required": true,
    "unique": true,
    "options": {
      "min": 18,
      "max": 19
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e2gh1wp7gvmb7r9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "esb3jsej",
    "name": "guild_id",
    "type": "number",
    "required": true,
    "unique": true,
    "options": {
      "min": 16,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
