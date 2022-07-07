import db from "../db.js";

export async function getMovies(_, res){
    try{
        const movies = await db.collection("movies").find().toArray();
        
        if(!movies) return res.sendStatus(404);
        
        res.status(200).send(movies);
    } catch(e){
        res.status(500).send(e);
    }
}
