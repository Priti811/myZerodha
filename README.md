# 📈 myZerodha – Full Stack MERN Trading Platform

A Zerodha-inspired full-stack trading platform built using the **MERN stack** (MongoDB, Express, React, Node.js), featuring secure JWT authentication, real-time stock dashboards, portfolio management, and a modern UI with data visualizations.

This project is divided into **three independent applications**:
- **Backend API** – RESTful API for all trading operations
- **Frontend** – Landing page, authentication, and user onboarding
- **Dashboard** – Interactive trading panel with real-time data and analytics

---

## 🚀 Features

### Authentication & Security
- User signup and login with **bcryptjs** password hashing
- JWT-based authentication with **jsonwebtoken**
- Role-based access control via authentication middleware
- Secure cookie-based session management

### Trading Features
- **Holdings Management** – View and manage stock holdings
- **Orders Management** – Buy/sell orders with order history
- **Positions Tracking** – Real-time position monitoring
- **Watch List** – Create and manage custom watch lists
- **Funds Management** – Track available funds and balance

### Dashboard & Analytics
- **Real-time Charts** – Interactive doughnut and line charts using Chart.js
- **Portfolio Summary** – Quick overview of portfolio performance
- **Buy/Sell Windows** – Action modals for executing trades
- **Vertical Graphs** – Visual representation of market data
- **Responsive UI** – Mobile-friendly design with Material-UI

---

## 📁 Project Structure

```
myZerodha/
├── backend/                    # Express.js API Server
│   ├── index.js               # Main server file
│   ├── package.json           # Dependencies
│   ├── Controllers/           # Business logic
│   │   └── AuthController.js
│   ├── middlewares/           # Auth and validation
│   │   └── AuthMiddleware.js
│   ├── model/                 # Mongoose models
│   │   ├── UserModel.js
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   └── PositionsModel.js
│   ├── Routes/                # API endpoints
│   │   └── AuthRoute.js
│   ├── schemas/               # Mongoose schemas
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   └── PositionsSchema.js
│   └── util/                  # Utilities
│       └── SecretToken.js
│
├── frontend/                  # React Landing & Auth
│   ├── public/               # Static files
│   ├── src/
│   │   ├── index.js          # Entry point
│   │   ├── index.css         # Global styles
│   │   ├── api/
│   │   │   └── axios.js      # API client configuration
│   │   ├── landing_page/     # Landing pages
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   ├── NotFound.js
│   │   │   ├── OpenAccount.js
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── pricing/
│   │   │   ├── products/
│   │   │   ├── signUp/
│   │   │   └── support/
│   │   └── test/
│   │       └── Hero.test.js
│   ├── build/                # Compiled output
│   └── package.json
│
├── dashboard/                # React Trading Dashboard
│   ├── public/              # Static files
│   ├── src/
│   │   ├── index.js         # Entry point
│   │   ├── index.css        # Global styles
│   │   ├── components/      # Dashboard components
│   │   │   ├── Dashboard.js
│   │   │   ├── Home.js
│   │   │   ├── TopBar.js
│   │   │   ├── Menu.js
│   │   │   ├── Holdings.js
│   │   │   ├── Orders.js
│   │   │   ├── Positions.js
│   │   │   ├── WatchList.js
│   │   │   ├── Funds.js
│   │   │   ├── Summary.js
│   │   │   ├── BuyActionWindow.js
│   │   │   ├── SellActionWindow.js
│   │   │   ├── DoughnutChart.js
│   │   │   ├── VerticalGraph.js
│   │   │   ├── Apps.js
│   │   │   └── GeneralContext.js
│   │   └── data/
│   │       └── data.js      # Mock/sample data
│   ├── build/               # Compiled output
│   └── package.json
│
└── README.md               # This file
```

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js & Express.js** | Server runtime and API framework |
| **MongoDB & Mongoose** | NoSQL database and ODM |
| **JWT** | Secure authentication tokens |
| **bcryptjs** | Password hashing and security |
| **Passport.js** | Authentication strategy |
| **CORS** | Cross-origin resource sharing |
| **Dotenv** | Environment variable management |

### Frontend (Web)
| Technology | Purpose |
|-----------|---------|
| **React** | UI library and component framework |
| **React Router DOM** | Client-side routing |
| **Axios** | HTTP client for API calls |
| **React Toastify** | Toast notifications |
| **React Cookie** | Cookie management |
| **Bootstrap** | CSS framework and responsive design |

### Dashboard
| Technology | Purpose |
|-----------|---------|
| **React** | UI library |
| **Material-UI (MUI)** | Component library with pre-built components |
| **Chart.js & react-chartjs-2** | Data visualization and charts |
| **Axios** | API communication |
| **React Router DOM** | Navigation between pages |

---


### Data Models

#### User Model
```javascript
{
  username: String,
  password: String (hashed),
  email: String,
  createdAt: Date
}
```

#### Holdings Model
```javascript
{
  userId: ObjectId,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String
}
```

#### Orders Model
```javascript
{
  userId: ObjectId,
  symbol: String,
  qty: Number,
  price: Number,
  type: String (buy/sell),
  status: String,
  createdAt: Date
}
```

#### Positions Model
```javascript
{
  userId: ObjectId,
  symbol: String,
  qty: Number,
  avg: Number,
  day: String,
  isLoss: Boolean
}
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v14+ and npm
- MongoDB Atlas account or local MongoDB instance
- Git

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/myZerodha.git
cd myZerodha
```

#### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=3002
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

Start the backend:
```bash
npm run dev    # Development with nodemon
npm start      # Production
```

#### 3. Setup Frontend (Landing Page & Auth)
```bash
cd ../frontend
npm install
npm start
```

The frontend will run on `http://localhost:3000`

#### 4. Setup Dashboard (Trading Panel)
```bash
cd ../dashboard
npm install
npm start
```

The dashboard will run on `http://localhost:3001` or `http://localhost:3006`

---

## 📦 Dependencies Overview

### Backend Dependencies
```json
{
  "express": "^5.1.0",
  "mongoose": "^8.18.1",
  "jsonwebtoken": "^9.0.2",
  "bcryptjs": "^3.0.2",
  "passport": "^0.7.0",
  "cors": "^2.8.5",
  "dotenv": "^17.2.2",
  "cookie-parser": "^1.4.7"
}
```

### Frontend Dependencies
```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^7.9.3",
  "axios": "^1.12.2",
  "react-cookie": "^8.0.1",
  "react-toastify": "^11.0.5"
}
```

### Dashboard Dependencies
```json
{
  "react": "^19.1.1",
  "@mui/material": "^7.3.2",
  "@mui/icons-material": "^7.3.2",
  "chart.js": "^4.5.0",
  "react-chartjs-2": "^5.3.0",
  "axios": "^1.12.2"
}
```

---

## 🔐 Authentication Flow

1. User registers via the **Frontend** (`/signup`)
2. Password is hashed using **bcryptjs**
3. User data is stored in **MongoDB**
4. On login, credentials are verified
5. **JWT token** is generated and sent to client
6. Token is stored in **cookies**
7. Protected routes verify token via **AuthMiddleware**
8. Dashboard accesses user data with authenticated requests

---

## 🔄 API Communication

- **Frontend** and **Dashboard** communicate with **Backend API** using **Axios**
- CORS is configured to allow requests from localhost and production URLs
- Credentials (cookies) are included in all requests for authentication

---

## 📱 Components Overview

### Frontend Components
- **Navbar** – Navigation header with sign-up and menu links
- **Footer** – Footer with company information
- **NotFound** – 404 error page
- **OpenAccount** – Account opening form
- **SignUp** – User registration page
- **About** – Company information
- **Pricing** – Pricing plans
- **Products** – Product listings
- **Support** – Customer support page

### Dashboard Components
- **Dashboard** – Main trading interface
- **Home** – Home/overview page
- **TopBar** – Header with user info
- **Menu** – Navigation sidebar
- **Holdings** – Stock holdings list
- **Orders** – Order history and management
- **Positions** – Active positions
- **WatchList** – Tracked stocks
- **Funds** – Account balance and funds
- **Summary** – Portfolio summary
- **BuyActionWindow** – Modal for buying stocks
- **SellActionWindow** – Modal for selling stocks
- **DoughnutChart** – Pie chart visualization
- **VerticalGraph** – Bar/line chart
- **GeneralContext** – State management context

---

## 🎨 Styling

- **Frontend**: Bootstrap 5 for responsive design
- **Dashboard**: Material-UI (MUI) for modern component library
- **Custom CSS**: Individual `.css` files for component-specific styling

---

## 🧪 Testing

Run tests with:
```bash
# Frontend tests
cd frontend
npm test

# Dashboard tests
cd dashboard
npm test
```

---

## 📚 Environment Variables

### Backend (.env)
```env
PORT=3002
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/myzerodha
JWT_SECRET=your_super_secret_jwt_key_12345
NODE_ENV=development
```

---

## 🔗 Deployment

The applications are configured for deployment on **Render**:
- **Backend**: `https://your-backend.onrender.com`
- **Frontend**: `https://myzerodha-frontend.onrender.com`
- **Dashboard**: `https://myzerodha-dashboard.onrender.com`

Update CORS origins in `backend/index.js` with your production URLs.

---



---

## 🎯 Future Enhancements

- [ ] Real-time stock price integration (WebSocket)
- [ ] Advanced charting with TradingView lightweight charts
- [ ] Option trading support
- [ ] Algorithmic trading bots
- [ ] Mobile app (React Native)
- [ ] Dark mode theme
- [ ] Multi-language support
- [ ] Advanced portfolio analytics

---

