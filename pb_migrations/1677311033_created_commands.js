migrate((db) => {
  const collection = new Collection({
    "id": "dslef6r2q4jhh43",
    "created": "2023-02-25 07:43:53.096Z",
    "updated": "2023-02-25 07:43:53.096Z",
    "name": "commands",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ccqnrrkt",
        "name": "command",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 30,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ahh1fjdb",
        "name": "server",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "e2gh1wp7gvmb7r9",
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
  const collection = dao.findCollectionByNameOrId("dslef6r2q4jhh43");

  return dao.deleteCollection(collection);
})
