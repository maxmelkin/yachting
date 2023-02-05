/* https://www.mongodb.com/docs/drivers/node/current/usage-examples/findOne/ */
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://captain:Password2023@yachting.rlwctym.mongodb.net/test";
const client = new MongoClient(uri);
async function run() {
    try {
        const database = client.db("yachting");
        const yachts = database.collection("yachts");
        const query = { marine: "Albin" };
        const options = {
            // sort matched documents in descending order by model name
            // sort: { "model": -1 },
            // Include only the `marine` and `model` fields in the returned document
            projection: { _id: 0, marine: 1, model: 1 },
        };
        const yacht = await yachts.findOne(query, options);
        console.log(yacht);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);