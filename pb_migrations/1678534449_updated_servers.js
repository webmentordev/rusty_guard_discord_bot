migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e2gh1wp7gvmb7r9")

  collection.deleteRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e2gh1wp7gvmb7r9")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
