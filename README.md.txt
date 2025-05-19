Citizen Engagement System
A web-based platform for citizens to submit and track complaints (e.g., sanitation, public works) with a React.js frontend and Node.js/Express backend.

Features
Submit complaints (category, description, email).

Track complaint status (Pending/In Progress/Resolved).

Simple admin view to list all complaints.

Responsive UI (works on mobile/desktop).

Tech Stack
Frontend: React.js, Axios

Backend: Node.js, Express

Database: MongoDB

Deployment: Vercel (Frontend), Railway (Backend)

Setup
Prerequisites
Node.js ≥ 16

MongoDB (local or Atlas)

Git

Installation
Clone the repo:

bash
git clone https://github.com/AnithaUwi/communityapp.git
cd communityapp
Backend Setup:

bash
cd server
npm install
cp .env.example .env  # Update with  MongoDB URI
npm start
Runs on http://localhost:5000

Frontend Setup:

bash
cd ../client
npm install
npm start
Runs on http://localhost:3000

API Endpoints
Endpoint	Method	Description
/api/complaints	POST	Submit a new complaint
/api/complaints	GET	Fetch all complaints (admin)
/api/complaints/:id	GET	Fetch single complaint by ID
Environment Variables
Create .env in server/:

env
MONGO_URI=your_mongodb_uri
PORT=5000


Database: Use MongoDB Atlas.

Future Improvements
User authentication (Firebase/JWT).

Admin dashboard with complaint resolution.

SMS/email notifications.

Contributing
Pull requests welcome! Open an issue for bugs/feature requests.



