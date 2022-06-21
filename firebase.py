import pyrebase

firebaseConfig = {
    "apiKey": "",
    "authDomain": "",
    "projectId": "",
    "databaseURL": "",
    "storageBucket": "",
    "messagingSenderId": "",
    "appId": "",
}

firebase = pyrebase.initialize_app(config)
storage = firebase.storage()
database = firebase.database()
