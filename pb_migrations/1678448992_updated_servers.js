migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e2gh1wp7gvmb7r9")

  // remove
  collection.schema.removeField("s8kc2viv")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e2gh1wp7gvmb7r9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s8kc2viv",
    "name": "guild_id",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": 540,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("esb3jsej")

  return dao.saveCollection(collection)
})
