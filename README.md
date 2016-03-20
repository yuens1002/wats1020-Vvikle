# wats1020-Vvikle
WATS1020 Final Project

Concept

Simple one-page web app to allow people to find, list and share their vinyl record collection.  
The app will be built with Google Maps and Discogs API integration.  Google Maps API will be used to
display markers of existing users in an area based on a zip code.  Discogs API will be used to help pinpoint a 
articular vinyl record the user wishes to share from the app interface.  The Django default mySQLite database will 
be used to store user data.  

Functionality

An anonymous user will be able to perform a search for existing users based on a zip code and to initiate 
contact.  The user will be able to add his/her vinyl collection to share onto the database from Discogs’ API 
using the app interface.  User interaction is limited to the current app session only.  perhaps a future version of 
this app can be made to allow a user to create an optional account page authenticated by the Google Sign-In API enabling 
the user to edit their vinyl collection, address, zip and contact info.  Conceivably, the app can default to displaying data 
stored for the user based on his/her account and past history.   

Components

* simple database to store the following fields: user name, zipcode, address, vinyl title, label catalog data.
* Google and Discogs APIs
* Bootstrap Framework
* custom js to handle in-app interactions, ex. form inputs/validation, API integration etc...


