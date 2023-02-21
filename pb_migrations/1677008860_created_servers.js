migrate((db) => {
  const collection = new Collection({
    "id": "e2gh1wp7gvmb7r9",
    "created": "2023-02-21 19:47:40.866Z",
    "updated": "2023-02-21 19:47:40.866Z",
    "name": "servers",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "fpho7grh",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("e2gh1wp7gvmb7r9");

  return dao.deleteCollection(collection);
})
