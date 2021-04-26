# Strapi application


Seed database:
mongorestore --uri mongodb+srv://jonatanbs:<PASSWORD>@cluster0.sbzvi.mongodb.net 

Dump from database (to directory: ./dump/DB):
mongodump --uri mongodb+srv://jonatanbs:<PASSWORD>@cluster0.sbzvi.mongodb.net/ --gzip -o ./dump/DB
mongodump --gzip -o ./dump/DBdump --uri mongodb+srv://jonatanbs:<PASSWORD>@cluster0.sbzvi.mongodb.net/ 

Database:
https://cloud.mongodb.com/v2

Dump strapi configuration (to directory: ./dump):
yarn strapi configuration:dump -p --file dump/strapiConfDump.json
