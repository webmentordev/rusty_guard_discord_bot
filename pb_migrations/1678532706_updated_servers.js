migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e2gh1wp7gvmb7r9")

  // remove
  collection.schema.removeField("esb3jsej")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9ptigw0p",
    "name": "guild_id",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 19,
      "max": 19,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e2gh1wp7gvmb7r9")

  // add
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

  // remove
  collection.schema.removeField("9ptigw0p")

  return dao.saveCollection(collection)
})
