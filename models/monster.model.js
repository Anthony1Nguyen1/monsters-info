import mongoose from "mongoose";

const monsterSchema = new mongoose.Schema(
    {
        id: { type: Number, unique: true },
        name: { type: String, required: true },
        username: { type: String, required: false },
        email: { type: String, required: false },
        address: {
            type: String, required: false,
            street: { type: String, required: false },
            suite: { type: String, required: false },
            city: { type: String, required: false },
            zipcode: { type: String, required: false },
            geo: {
                lat: { type: String, required: false },
                lng: { type: String, required: false },
            }
        },
        phone: { type: String, required: false },
        website: { type: String, required: false },
        company: {
            type: String, required: false,
            name: { type: String, required: false },
            catchPhrase: { type: String, required: false },
            bs: { type: String, required: false }
        },
        image_url: { type: String, required: true },
        
    }, { timestamps: true, strictQuery: true }
);

monsterSchema.pre('save', async function (next) {
    if (this.isNew) {
        const highestMonster = await this.constructor.findOne({}, { id: 1 }).sort({ id: -1 });
        this.id = highestMonster ? highestMonster.id + 1 : 1;
    }
    next();
});

const Monster = mongoose.model("Monster", monsterSchema);

export default Monster;