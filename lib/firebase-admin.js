import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    })
  });
}

export default admin.firestore();

// another option
if (!admin.apps.length) {
  // const serviceAccount = require('../firebase-service-account-key.json');
  // admin.initializeApp({
  //   credential: admin.credential.cert(serviceAccount)
  // });
}
