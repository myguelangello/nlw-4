import { VercelRequest, VercelResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url';

let cachedDB: Db = null;

async function connectToDatabase(uri: string) {
    if (cachedDB) {
        return cachedDB;
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    /* const dbName = url.parse(uri).pathname.substr(1); */

    const db = client.db('movedb');

    cachedDB = db;

    return db;
}

export default async (request: VercelRequest, response: VercelResponse) => {
    const { email, name, image, level, currentExperience, challengesCompleted } = request.body;

    const db = await connectToDatabase(process.env.MONGODB_URI);

    const collection = db.collection('users');

    await collection.insertOne({
        email,
        name,
        image,
        level,
        currentExperience,
        challengesCompleted,
    })

    return response.status(201).json({ ok: true });
}

/* in the '.env' file replace 'myFirstDatabase' with 'move_db' */