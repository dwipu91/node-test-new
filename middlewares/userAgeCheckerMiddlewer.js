//  age check middleweres
export const ageCheck = (req, res, next) => {
  if (req.body.age > 21) {
    res.status(200).json({ message: "your are is allow" });
  }
  next();
};
