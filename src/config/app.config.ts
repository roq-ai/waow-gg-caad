interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Customer'],
  tenantName: 'Client',
  applicationName: 'Waow.GG',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user balance', 'Manage match result', 'Manage user profile', 'Manage bet history'],
  getQuoteUrl: 'https://app.roq.ai/proposal/e6be0e88-fe7e-4525-9fc9-007a56b5eae7',
};
