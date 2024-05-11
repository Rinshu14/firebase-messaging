importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');


const firebaseConfig = {
    apiKey: "AIzaSyA7an_sTGqKO68c53dY966B6JrpbGlTgfc",
    authDomain: "clod-messaging-82e15.firebaseapp.com",
    projectId: "clod-messaging-82e15",
    storageBucket: "clod-messaging-82e15.appspot.com",
    messagingSenderId: "819961140317",
    appId: "1:819961140317:web:2bbb11d27d1c5e79a429b4"
  };


  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();
  

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

