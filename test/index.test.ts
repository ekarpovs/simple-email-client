import {describe, test} from '@jest/globals';

import { EmailClient } from "../src/EmailClient";
import { Types } from "../src/index";
import { TransportConfig } from '../src/Types';


describe("Simple Email Client E2E test", () => {

  test("Has to send email to a Mail Receiver", async ()=> {
    const config: TransportConfig = {
      name: "gmail",
      user: "<the-account-owner-email>",
      password: "<the-account-owner-password>"
    };
    
    const emailClient = new EmailClient(config);
    const params: Types.EmailParams = {
      email: "<receiver-email>",
      name: "Mail Receiver",
    };
    
    const email = emailClient.buildEmail("signUpUser", params);
    await emailClient.sendEmail(email);    
  });
});