//! Execute this file i.e node SESEmailer.js then email will be sent

const AWS = require("aws-sdk");
require("dotenv").config();

const libraryFineEmailTemplate = require("./emailTemplates/libraryFineEmailTemplate")
const subscriberEmailTemplate = require("./emailTemplates/subscriberEmailTemplate");
const contactUsEmailTemplate = require("./emailTemplates/contactUsEmailTemplate");
const libraryFineEmail = require("./emailTemplates/libraryFineEmailTemplate");

const SES_CONFIG = {
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
  region: process.env.REGION,
};

const AWS_SES = new AWS.SES(SES_CONFIG);

const sendNewsLetterEmail = async (subscriberEmail) => {
  let params = {
    Source: "yourschoolsoftwares@gmail.com",
    Destination: {
      ToAddresses: ["asim.poudel@deerwalk.edu.np"],
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: subscriberEmailTemplate(subscriberEmail),
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Your School Software: Subscription Email`,
      },
    },
  };

  try {
    const res = await AWS_SES.sendEmail(params).promise();
    console.log("Email sent successfully", res);
    return true;
  } catch (error) {
    console.log(error);
  }
};

const sendContactUsEmail = async (email, subject, message) => {
  let params = {
    Source: "yourschoolsoftwares@gmail.com",
    Destination: {
      ToAddresses: ["asim.poudel@deerwalk.edu.np"],
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: contactUsEmailTemplate(email, subject, message),
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Your School Software: Contact Us Enquiry`,
      },
    },
  };

  try {
    const res = await AWS_SES.sendEmail(params).promise();
    console.log("Email sent successfully", res);
    return true;
  } catch (error) {
    console.log(error);
  }
};

const sendLibraryFineEmail = async (fine) => {
    let params = {
      Source: "yourschoolsoftwares@gmail.com",
      Destination: {
        ToAddresses: ["kshitiz.shah@deerwalk.edu.np"],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: libraryFineEmailTemplate(fine),
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: `Your School Software: Contact Us Enquiry`,
        },
      },
    };
  
    try {
      const res = await AWS_SES.sendEmail(params).promise();
      console.log("Email sent successfully", res);
      return true;
    } catch (error) {
      console.log(error);
    }
  };
// sendContactUsEmail();

// named export
module.exports = {
  sendNewsLetterEmail,
  sendContactUsEmail,
  sendLibraryFineEmail
};
