const User = require("./../model/userModel")

exports.getAllUser = async (req, res) => {
  try {
    const user = await User.find()
    res.status(201).json({
      status: "Success",
      result: user.length,
      message: {
        user
      }
    })
  } catch (error) {
    res.status(404).json({
      status: "Success",
      message: error
    })
  }
}

exports.getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(201).json({
      status: "Success",
      result: user.length,
      message: {
        user
      }
    })
  } catch (error) {
    res.status(404).json({
      status: "Success",
      message: error
    })
  }
}