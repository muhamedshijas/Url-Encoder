import nodemailer from 'nodemailer'
export default function sentOtp(email, otp){
    return new Promise((resolve, reject)=>{
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: "muhamedshijasm@gmail.com",
              pass: "vgrarunraaribljd",
            },
          });
      
            var mailOptions={
              from: "muhamedshijasm@gmail.com",
              to: email,
              subject: " Email verification",
              html: `
              <h1>Verify Your Email For Automent</h1>
                <h3>use this code in Automent to verify your email</h3>
                <h2>${otp}</h2>
              `,
            }
        
            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log("error", error, info)
                reject(error) 

              } else {
                console.log("success")
                resolve({success:true, message:"Email sent successfull"})
              }
            });
    })
}