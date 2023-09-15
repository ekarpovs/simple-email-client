import type { EmailParams, EmailResources } from "./Types";


const linkFormatter = (params: EmailParams): EmailParams => {
  const { name, email, token, id } = params; 
  const link = `${process.env.CLIENT_URL}/reset-password?token=${token}&id=${id}`;
  return {
    name: name,
    email: email,
    link: link,
  };
};

export const register: EmailResources = {
  template: 
  `
  <html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <p>Hi {{name}},</p>
    <p>Your account has been created successfully</p>
  </body>
  </html>
  `,
  indexedParamsNames: ["name"],
  subject: "Account Created",
};

export const resetPasswordRequest: EmailResources = {
  pre: linkFormatter,
  template: 
  `
  <html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <p>Hi {{name}},</p>
    <p>You requested to reset your password.</p>
    <p> Please, click the link below to reset your password</p>
    <a href={{link}}>Reset Password</a>
  </body>
  </html>
  `,
  indexedParamsNames: ["name", "link"],
  subject: "Password Reset Request",
};
  
export const resetPassword: EmailResources = {
  template: 
  `
  <html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <p>Hi {{name}},</p>
    <p>Your password has been changed successfully</p>
  </body>
  </html>
  `,
  indexedParamsNames: ["name"],
  subject: "Password Reset Successfully",
};
