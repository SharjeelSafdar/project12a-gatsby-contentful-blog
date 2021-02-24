export const firebaseAppConfig =
  process.env.NODE_ENV !== "production"
    ? {
        apiKey: process.env.FIREBASE_API_KEY_DEV,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN_DEV,
        projectId: process.env.FIREBASE_PROJECT_ID_DEV,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET_DEV,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID_DEV,
        appId: process.env.FIREBASE_APP_ID_DEV,
      }
    : {
        apiKey: process.env.FIREBASE_API_KEY_PROD,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN_PROD,
        projectId: process.env.FIREBASE_PROJECT_ID_PROD,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET_PROD,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID_PROD,
        appId: process.env.FIREBASE_APP_ID_PROD,
      };
