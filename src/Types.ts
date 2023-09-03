export type TransportConfig = {
    name: string;
    user: string;
    password: string;
  };
  
export type EmailBaseData = {
from?: string;
to: string | string[];
cc?: string | string[];
bcc?: string | string[];
subject: string;
text?:string,
html: string;
};

export type EmailParams = {
    email: string;
    name: string;
    [key: string]: string;
  };
  
export type EmailResources = {
pre?(params: EmailParams): EmailParams,
template: string;
indexedParamsNames: Array<string>;
subject: string;
};
