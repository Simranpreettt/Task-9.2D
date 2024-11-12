import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import ArticleList from './ArticleList'; 
import TutorialList from './TutorialList';
import Signup from './Signup';
import Login from './Login'; 
import Footer from './Footer';
import NewPostPage from './NewPostPage';
import FindQuestionPage from './FindQuestionPage';
import RouteAccess from './RouteAccess';  // Import RouteAccess for login protection
import PricingPlans from './PricingPlans';
import PaymentPage from './PaymentPage';  // Import the PaymentPage component

function App() {
  const [showLogin, setShowLogin] = useState(false);  
  const [showSignup, setShowSignup] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLoginClick = () => {
    setShowLogin(true);  
    setShowSignup(false); 
  };

  const redirectToHome = () => {
    setIsLoggedIn(true); 
    setShowLogin(false); 
    setShowSignup(false); 
  };

  const showSignupPage = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const showLoginPage = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);  
    alert('Logged out successfully');
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/new-post">New Post</Link>
          <Link to="/find-question">Find Question</Link>
          <Link to="/plans">Plans</Link> {/* Add Plans to the navigation */}
        </nav>

        <Header 
          handleLoginClick={handleLoginClick} 
          handleLogoutClick={handleLogoutClick} 
          isLoggedIn={isLoggedIn} 
        />

        <Banner />

        {/* Conditional rendering for Login and Signup */}
        {!isLoggedIn && showLogin && (
          <Login showSignUp={showSignupPage} redirectToHome={redirectToHome} />
        )}

        {!isLoggedIn && showSignup && (
          <Signup showLogin={showLoginPage} />
        )}

        <Routes>
          <Route path="/" element={
            <div>
              <h1 align="center">Featured Articles</h1>
              <ArticleList />
              <h1 align="center">Featured Tutorials</h1>
              <TutorialList />
            </div>
          } />

          {/* Protect New Post and Find Question routes */}
          <Route 
            path="/new-post" 
            element={
              <RouteAccess isLoggedIn={isLoggedIn}>
                <NewPostPage />
              </RouteAccess>
            } 
          />
          
          <Route 
            path="/find-question" 
            element={
              <RouteAccess isLoggedIn={isLoggedIn}>
                <FindQuestionPage />
              </RouteAccess>
            } 
          />

          {/* Add the route for pricing plans */}
          <Route path="/plans" element={<PricingPlans />} />

          {/* Define the payment route */}
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
