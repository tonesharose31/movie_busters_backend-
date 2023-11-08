const checkTitle = (req, res, next) => {
  if(req.body.title) {
    console.log("Title is okay")
    next()
  } else {
    res.status(400).json({ error: "Title is required!" })
  }
}


module.exports = {
  checkTitle
}