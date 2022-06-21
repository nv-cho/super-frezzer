import pyrebase

firebaseConfig = {
    "apiKey": "AIzaSyCRS-U6PuxIO7F6e9McDuH3MMsfie9QAoc",
    "authDomain": "datos-a7b43.firebaseapp.com",
    "projectId": "datos-a7b43",
    "databaseURL": "https://datos-a7b43-default-rtdb.firebaseio.com",
    "storageBucket": "datos-a7b43.appspot.com",
    "messagingSenderId": "1065791387628",
    "appId": "1:1065791387628:web:41c331bce079507a5772c9",
}

firebase = pyrebase.initialize_app(config)
storage = firebase.storage()
database = firebase.database()
