export const errorHandler = (error, req, res, next) => {
  // find status code
  const status = res.statusCode ? res.statusCode : 500;
  //    sand message
  res.status(status).json({ message: error.message });
};
