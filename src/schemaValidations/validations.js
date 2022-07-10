import Joi from "joi";

export async function movieSchemaValidation(body){
    const schema = Joi.object({
        title: Joi.string().required(),
        director: Joi.string().required(),
        year: Joi.string().pattern(/^[0-9]{4}$/),
        genre: Joi.array().items(Joi.string().valid(
            "Lançamento",
            "Drama",
            "Ação",
            "Suspense",
            "Terror",
            "Romance",
            "Aventura",
            "Clássico",
            "Documentário",
            "Show"
        )),
        pr: Joi.number().valid(
            0, 10, 12, 14, 16, 18
        ).required(),
        quantity: Joi.number().required(),
        value: Joi.string().pattern(/^[0-9]*\.[0-9]{2}$/).required(),
        selleremail: Joi.string().email().required(),
        image: Joi.string().uri().required(),
        description: Joi.string().required()
    });

    const value = schema.validate({
        title: body.title,
        director: body.director,
        year: body.year,
        genre: body.genre,
        pr: body.pr,
        quantity: body.quantity,
        value: body.value,
        selleremail: body.selleremail,
        image: body.image,
        description: body.description
    });

    return value;
}

export async function purchaseSchemaValidation(body){
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        price: Joi.string().pattern(/^[0-9]*\.[0-9]{2}$/).required(),
        products: Joi.array().items(Joi.object({
            image: Joi.string().uri().required(),
            title: Joi.string().required(),
            value: Joi.string().pattern(/^[0-9]*\.[0-9]{2}$/).required(),
            selleremail: Joi.string().email().required(),
            productId: Joi.string().required()  
        })).min(1).required()
    });

    const value = schema.validate({
        name: body.name,
        email: body.email,
        price: body.price,
        products: body.products
    });

    return value;
}