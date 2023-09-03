import type { EmailResources } from "./Types";

export const setEmailResources = (emailName: string, resources: EmailResources) => {
  resourcesCollection[emailName] = resources;
};
  
export const removeEmailResources = (emailName: string) => {
  delete resourcesCollection[emailName];
};

export const getEmailResources = (emailName: string): EmailResources => {
  return resourcesCollection[emailName];
};
  
const resourcesCollection: {[key: string]: EmailResources} = {};

  