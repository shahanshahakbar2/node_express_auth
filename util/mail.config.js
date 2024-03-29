const nodemailer = require('nodemailer')

const mailConfig = async(mTo,mSub,mTemplate)=>{
  try {
    // configaration part
    const transporter = await nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS
      }
    });
    // transport mail
    let info =await transporter.sendMail({
      from: process.env.MAIL_ID,
      to: mTo,
      subject:mSub,
      html:`<div> ${mTemplate}</div>`
    });
    return info
  } catch (err) {
    return err
    
  }
}
module.exports = mailConfig