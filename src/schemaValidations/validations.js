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