/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPPORT_EMAIL: string;
      NEXT_PUBLIC_LOGROCKET_KEY: string;
      SITE_URL: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
    }
  }
}

export {};
