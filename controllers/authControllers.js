const User = require("./../model/userModel")
const jwt = require("jsonwebtoken")
const { promisify } = require("util")

// ----------CREATE TOKEN----------
const signToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })
}

// ----------SIGN UP----------
exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm
    })

    const token = signToken(newUser._id)

    res.status(201).json({
      status: "Success",
      token,
      data: {
        user: newUser
      }
    })
  } catch (error) {
    res.status(404).json({
      status: "Success",
      message: error
    })
  }
}

// ----------LOGIN USER----------
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    if(!email || !password) {
      return next(res.status(404).json({
        status: "fail",
        message: "Please provide email & password"
      }))
    }
    const user = await User.findOne({ email }).select("+password")
      
    if(!user || !(await user.correctPassword(password, user.password))){
      return next(res.status(401).json({
        status: "fail",
        message: "Incorrect email and password"
      }))
    }

    const token = signToken(user.id)
    res.status(200).json({
      status: "Success",
      token
    })
  } catch (error) {
    res.status(404).json({
      status: "Success",
      message: error
    })
  }
}

// ----------PROTECTING DATA----------
exports.protect = async (req, res, next) => {
  try {
    let token
    if(
      req.headers.authorization && 
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1]
    }
    // console.log("token: ", token)
    // console.log("1st: ", req.headers.authorization)
    // console.log("2nd: ", req.headers.authorization.startsWith("Bearer"))

    if(!token) {
      return res.status(401).json({
        status: "fail",
        message: "You are not loged in to get access"
      })
    }
    // validate token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    
    // user exists
    // const freshUser = await User.findOne(decoded.id)

    // if(!freshUser) {
    //   return next(res.status(401).json({
    //     status: "fail",
    //     message: "The user belonging to this token no longer exist"
    //   }))
    // }


    next()
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    })
  }
}