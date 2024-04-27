# Social Media Clone

This project is a social media clone built with React, Chakra UI, and Firebase. It aims to replicate the basic functionality of popular social media platforms, allowing users to create accounts, post content, interact with posts, and connect with other users.
![image](https://github.com/shiven24k/insta/assets/65511405/d51a2079-1b41-4dbc-aac9-05397b1497c8)

## Features

- **User Authentication:** Users can sign up, sign in, and sign out securely using Firebase Authentication.
- **Profile Management:** Users can update their profile information and upload profile pictures.
- **Post Creation:** Users can create posts with text and images.
- **Post Interaction:** Users can like, comment on, and share posts.
- **Real-time Updates:** Posts and interactions are updated in real-time using Firebase Realtime Database or Firestore.
- **Responsive Design:** The application is responsive and works well on both desktop and mobile devices.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Chakra UI:** A simple, modular, and accessible component library for React.
- **Firebase:** A platform developed by Google for creating mobile and web applications.
  - **Firebase Authentication:** For user authentication.
  - **Firebase Realtime Database or Firestore:** For real-time data synchronization.
  - **Firebase Storage:** For storing user-uploaded images.


## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/shiven24k/insta.git
```
2. Go to git directory
```bash
cd insta  
```
2. Install node package

```bash
npm install
```
3. Create a .env file and coppy the api keys fron your firebase account to the file and paste in .env
```bash
VITE_FIREBASE_API_KEY=<YOUR_FIREBASE_API_KEY>
VITE_FIREBASE_AUTH_DOMAIN=<YOUR_FIREBASE_AUTH_DOMAIN>
VITE_FIREBASE_PROJECT_ID=<YOUR_FIREBASE_PROJECT_ID>
VITE_FIREBASE_STORAGE_BUCKET=<YOUR_FIREBASE_STORAGE_BUCKET >
VITE_FIREBASE_MESSAGING_SENDER_ID=<YOUR_FIREBASE_MESSAGING_SENDER_ID>
VITE_FIREBASE_APP_ID=<YOUR_FIREBASE_APP_ID>
VITE_FIREBASE_MEASUREMENT_ID=<YOUR_FIREBASE_MEASUREMENT_ID>
```
4. Start with npm
```bash
npm run dev
```



    
