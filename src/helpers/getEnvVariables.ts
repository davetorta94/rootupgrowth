export const getEnvVariables = () => {
  return {
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID ?? "",
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID ?? "",
    PUBLIC_KEY_ID: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY ?? "",
  };
};
