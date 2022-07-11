import { db } from '../db.js';
import {
    movieSchemaValidation,
    purchaseSchemaValidation
} from '../schemaValidations/validations.js';

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

export async function getPurchases(_, res){
    const { session } = res.locals;
    if(!session) return res.sendStatus(422);

    try{
        const user = await db.collection("usuarios").findOne({ _id: session.userId });
        if(!user) return res.sendStatus(404);

        const userPurchases = await db.collection("purchases").find({ email: user.email }).toArray();
        if(!userPurchases) return res.sendStatus(404);

        userPurchases.forEach((purchase) =>
            delete purchase._id
        );
        res.status(200).send(userPurchases);
    } catch(e){
        res.status(500).send(e);
    }
}

export async function postPurchase(req, res){
    const body = req.body;

    try{
        if(!body) return res.sendStatus(422);

        const value = await purchaseSchemaValidation(body);
        if(value.error) return res.status(422).send(value.error.details);

        const isSellerPuchase = body.products.some((product) =>
            product.selleremail === body.email
        );
        if(isSellerPuchase) return res.status(422).send("seller buying own product");

        const purchase = {
            productId: Date.now().toString(),
            ...body  
        }

        await db.collection("purchases").insertOne(purchase);
        res.status(201).send(purchase);
    } catch(e){
        res.status(500).send(e);
    }
}