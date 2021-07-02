declare var window: any;

export const environment = {
  production: true,
  apiUrl: window['env']['apiUrl'],
};
