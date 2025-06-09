// About page content
import "../App.css";
import { useNavigate } from "react-router-dom";
const About = () => {
  console.log("this is about component");
  const navigate = useNavigate();
  const onNavigateDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="child-container">
      <h2>About Us ℹ️</h2>
      <p>This page gives you information about our site.</p>
      <button onClick={onNavigateDashboard}>Go to Dashboard</button>
    </div>
  );
};

export default About;
