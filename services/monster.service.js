export const validateMonsterData = (req, res, next) => {
    const { name, imageUrl } = req.body;
    if (!name || !imageUrl) {
        return res.status(400).send('Name and imageUrl are required fields');
    }
    next();
};
