import handlebars from "handlebars";

import type { EmailBaseData, EmailParams, EmailResources } from "./Types";
import { getEmailResources } from "./EmailResources";
  
export const buildEmail = (emailName: string, emailParams: EmailParams): EmailBaseData => {
  const resources = getEmailResources(emailName); 
  return emailBuilder(resources, emailParams);
};
  
const getIndexedParamKey = (name: string) => {
  const symbol = Symbol();
  const obj = { [symbol] : name};
  const { [symbol]: key } = obj;
  return key;
};
  
const emailBuilder = (resources: EmailResources, params: EmailParams): EmailBaseData => {
  if (resources.pre) {
    params = resources.pre(params);
  }
  const paramsList: {[key: string]: string} = {};
  resources.indexedParamsNames.forEach(name => {
    const alias = getIndexedParamKey(name);
    paramsList[alias] = params[alias];
  });
  const options: EmailBaseData = {
    from: params.sender,
    to: params.email,
    subject: resources.subject,
    html: handlebars.compile(resources.template)({ ...paramsList }),
  };
  return options;
};
  