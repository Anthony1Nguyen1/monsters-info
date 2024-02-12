import mongoose from "mongoose";

mongoose.set('strictQuery', true);

export const connectDB = async () => {
    const url = "mongodb+srv://nguyena48:bHr619Sp8nW3YP0x@cluster0.tz8nwp2.mongodb.net/?retryWrites=true&w=majority";
    try {
        const connection = await mongoose.connect(url, {
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (e) {
        console.log("Failed to connect database:", e);
    }
};