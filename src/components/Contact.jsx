// Contact page content
import { NavLink } from "react-router-dom";
import "../App.css";
const Contact = () => {
  console.log("this is contact component");
  return (
    <div className="child-container">
      <h2>Contact 📞</h2>
      <p>Feel free to reach out via email or phone.</p>
      <NavLink to="/dashboard">Go to Dashboard</NavLink>
    </div>
  );
};

export default Contact;
