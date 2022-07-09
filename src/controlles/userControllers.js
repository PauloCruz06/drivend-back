import { db } from '../db.js';
import { movieSchemaValidation } from '../schemaValidations/validations.js';

export async function postMovies(req, res){
    const body = req.body;

    try{
        if(!body) return res.sendStatus(422);
        
        const value = await movieSchemaValidation(body);
        if(value.error) return res.status(422).send(value.error.details);

        const movie = {
            productId: Date.now().toString(),
            ...body
        };

        await db.collection("movies").insertOne(movie);
        res.sendStatus(201);
    } catch(e){
        res.status(500).send(e);
    }
}