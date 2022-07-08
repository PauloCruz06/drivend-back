import { db } from '../db.js';

export async function getMovies(req, res){
    try{
        const { id } = req.query;
        if(id){
            const movie = await db.collection("movies").findOne({ productId: id });
            if(movie){
                delete movie._id;
                return res.status(200).send(movie);
            }
            return res.sendStatus(404);
        }

        const movies = await db.collection("movies").find().toArray(); 
        if(!movies) return res.sendStatus(404);
        movies.forEach((movie) => {
            delete movie._id;
            delete movie.pr;
            delete movie.quantity;
            delete movie.description;
        });
        res.status(200).send(movies);
    } catch(e){
        res.status(500).send(e);
    }
}
