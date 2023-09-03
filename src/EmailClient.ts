import { buildEmail } from "./EmailBuilder";
import { resetPassword, resetPasswordRequest, signUpUser} from "./EmailDefinitions";
import { 
  getEmailResources,
  removeEmailResources,
  setEmailResources
} from "./EmailResources";
import { EmailSender } from "./EmailSender";
import type { 
  EmailParams,
  EmailResources,
  TransportConfig,
  EmailBaseData
} from "./Types";

export class EmailClient {
  private emailSender: EmailSender;
  constructor(config: TransportConfig) {
    this.emailSender = new EmailSender(config);
    this.setPreDefinedResources();
  };

  private setPreDefinedResources(): void {
    this.setEmailResources("signUpUser", signUpUser);  
    this.setEmailResources("resetPasswordRequest", resetPasswordRequest);  
    this.setEmailResources("resetPassword", resetPassword);  
  };


  public getEmailResources(name: string): EmailResources {
    return getEmailResources(name);
  }

  public removeEmailResources(name: string): void {
    return removeEmailResources(name);
  }

  public setEmailResources(name: string, res: EmailResources): void {
    return setEmailResources(name, res);
  }

  public buildEmail(name: string, params: EmailParams): EmailBaseData {
    return buildEmail(name, params);
  };

  public async sendEmail(data: EmailBaseData) {
    await this.emailSender.sendEmail(data);
  }
};