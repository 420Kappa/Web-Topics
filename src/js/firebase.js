const firebaseConfig = {
    apiKey: "AIzaSyDn6Z55kzg10JwamVppBMjpK3RYBcTWKsc",
    authDomain: "topics-fff9b.firebaseapp.com",
    databaseURL: "https://topics-fff9b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "topics-fff9b",
    storageBucket: "topics-fff9b.appspot.com",
    messagingSenderId: "1081318852252",
    appId: "1:1081318852252:web:57d75f0d1eb25a292a8f59"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);
  function uploadImage() {
    const ref = firebase.storage().ref('Community');
    const file = document.querySelector("#photo").files[0];
    const name = +new Date() + "-" + file.name;
    const metadata = {
      contentType: file.type
    };
    const task = ref.child(name).put(file, metadata); task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
        console.log(url);
        alert('file uploaded successfully');
        document.querySelector("#image").src = url;
      })
      .catch(console.error);
  }
  const errorMsgElement = document.querySelector('span#errorMsg');
