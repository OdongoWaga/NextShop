// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV: "mongodb+srv://waga:ReactCycle26@cluster0-newgu.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "SuperSecret78",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dkwqktq6r/image/upload",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
