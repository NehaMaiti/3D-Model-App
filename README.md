# 3D Model Viewer Web Application

This project is a mini web application that allows users to view, interact with, and upload 3D models. It includes a frontend built with React, a backend using Node.js/Express, 
and Firebase as the database for storing model metadata.

## Features:
- **Frontend**: Displays a 3D model using React Three Fiber and Three.js.
  - Interactivity: Users can rotate, zoom, and pan the 3D model.
  - Search Bar: Users can filter the models by name.
  
- **Backend**: Node.js/Express server to handle:
  - **GET /models**: Fetches a list of models from the Firebase database.
  - **POST /upload**: Accepts 3D model files (e.g., GLB/GLTF), name, and description, and stores them in Firebase.

- **Database**: Firebase Firestore to store model metadata (ID, name, description, upload date, and URL).

---

## Project Setup

### Prerequisites:
Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Firebase](https://firebase.google.com/) account

### 1. Frontend Setup (React)
#### Clone the repository:
```bash
git clone https://github.com/your-username/3d-model-viewer.git
cd 3d-model-viewer
