# Mongo Docs
Mongo Docs allows you to use the [MongoDB query language](https://docs.mongodb.com/manual/reference/method/js-collection) to insert JSON documents as a Google Docs file to your Google Drive. It supports single and batch document updates and deletes, as well as searching for documents using either the document's unique ID, or comparison operators on document fields. 

This project was done for MongoDB Skunkworks 9.

## Commands
`show collections`

Lists the user's collections (equivalent to the user's folders on Google Drive).

`db.<collection_name>.insertOne(<document>)`

Inserts a single document to the specified collection.

`db.<collection_name>.insert(<document or array of documents>)`

Inserts one or an array of documents to the specified collection.

`db.<collection_name>.updateOne(<filter>, <update>)`

Updates a single document in the specified collection based on the filter (the first document that matches the filter).

`db.<collection_name>.updateMany(<filter>, <update>)`

Updates all the documents in the specified collection based on the filter.

`db.<collection_name>.deleteOne(<filter>)`

Deletes a single document in the specified collection based on the filter (the first document that matches the filter).

`db.<collection_name>.deleteMany(<filter>)`

Deletes all the documents in the specified collection based on the filter.

`db.<collection_name>.find(<query>)`

Finds all documents that match the query. Supports querying on the document's unique ID as well as querying on other document fields using`$gt`, `$gte`, `$lt`, `$lte`, `$eq`, `$neq`. 
