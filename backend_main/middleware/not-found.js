const notFound = (req, res) => res.status(404).json({success:false, msg: "This route does not exists!" })

module.exports = notFound
