import nodemailer from "nodemailer";

import { TransportConfig, EmailBaseData } from "./Types";

export class EmailSender {
  private config: TransportConfig;
  private transporter: nodemailer.Transporter;

  constructor(config: TransportConfig) {
    this.config = config;
    this.transporter = nodemailer.createTransport({
      service: this.config.name,
      auth: {
        user: this.config.user,
        pass: this.config.password,
      }
    });
  };
  
  public async sendEmail(data: EmailBaseData) {
    await this.transporter.sendMail({
      from: data.from,
      to: data.to,
      cc: data.cc,
      bcc: data.bcc,
      subject: data.subject,
      text: data.text,
      html: data.html, 
    });
  };
};
