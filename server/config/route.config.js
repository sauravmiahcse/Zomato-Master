import JwtPassport from "passport-jwt";

// Database Model
import { UserModel } from "../database/allModels";

const JWTStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "ZomatoAPP",
};

export default (passport) => {
  passport.use(
    new JWTStrategy(options, async (jwt__payload, done) => {
      try {
        const doesUserExist = await UserModel.findById(jwt__payload.user);
        if (!doesUserExist) return done(null, false);
        return done(null, doesUserExist);
      } catch (error) {
        throw new Error(error);
      }
    })
  );
};

// Explanation
// const req = {
//     headers: {
//         Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjE5NTIxODRkOWIwZjQ2ZTI0MDFhNTdiIiwiaWF0IjoxNjM3NzY3MTEyfQ.8BHsAcNZe_zuT-4pcqaZE63YmH3F_MfMobdGblzyTxQ"
//     }
// }
// will be converted to
// const req = {
//     headers: {
//         Authorization: "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjE5NTIxODRkOWIwZjQ2ZTI0MDFhNTdiIiwiaWF0IjoxNjM3NzY3MTEyfQ.8BHsAcNZe_zuT-4pcqaZE63YmH3F_MfMobdGblzyTxQ"
//     }
// }
// const jwt__payload = {
//     user: sfasf3423szdfa34324
// }
