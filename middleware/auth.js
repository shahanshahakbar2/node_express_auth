// decrypt the user id from auth_Token recieved by headers authorization

const { StatusCodes } = require("http-status-codes")
const jwt = require('jsonwebtoken')

const auth = async (req,res,next) => {
  try {
    // read the token from header
    let token = req.header('Authorization')
    if (!token) {
      return res.status(StatusCodes.NOT_FOUND).json({msg:`token not found`})
      
    }
    // verifing token
    else{
      await jwt.verify(token,process.env.ACCESS_SECRET,(err,data)=>{
        if (err) {
          return res.status(StatusCodes.UNAUTHORIZED).json({msg:`UnAuthorized token`})
          
        }
        else{
          // res.json({data}); // get id

          // store id in re.variable
          req.userId = data.id
          // continue to next controller
          next()
        }
      })
    }
    
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err})
    
  }
}
module.exports = auth