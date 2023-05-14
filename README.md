# OmniAI - A React-based Chatbot using OpenAI's GPT-3

OmniAI is a (fake) virtual assistant that is built using the OpenAI GPT-3 language model. It is a React-based web application that provides an interactive chat interface for users to ask questions and get responses from the AI. It's a demo project and does not actually possess the capabilities of a real AI.

This project also includes a feature for subscribing to newsletters, storing user email information in a MongoDB database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this project locally, you will need the following:

- Node.js and npm installed on your local machine.
- MongoDB installed and running on your local machine.
- OpenAI API key. This requires signing up on the OpenAI website and agreeing to their usage policies.

###


Clone the repository to your local machine:
git clone https://github.com/<your-github-username>/OmniAI.git


Install the required dependencies:
npm install

### Setting Up Environment Variables

You'll need to provide your OpenAI API Key and MongoDB connection string as environment variables. Create a .env file in the root directory of your project and add the following lines:

OPENAI_API_KEY=Your_OpenAI_API_Key
MONGO_DB_URI=Your_MongoDB_Connection_String

Replace Your_OpenAI_API_Key with the API key you received from OpenAI and Your_MongoDB_Connection_String with your MongoDB connection string.

### Running the Application

To start the server, run the following command in your terminal:

npm start

This should start your application. Open your browser and navigate to http://localhost:3000 to see your application running.

### Features
Chat Interface: Ask questions and get answers from the AI.
Newsletter Subscription: Subscribe to newsletters by providing your email.
Responsive Design: The application is responsive and works well on various device sizes.

## Built With

- [React](https://reactjs.org/) 
- [Tailwind CSS](https://tailwindcss.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/) 
- [MongoDB](https://www.mongodb.com/)
- [OpenAI GPT-3](https://openai.com/research/gpt-3/)