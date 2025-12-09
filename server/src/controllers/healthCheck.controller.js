const healthCheck = (req, res) => {
  res.status(200).json({ message: "Health check passed" });
};

export default healthCheck;
