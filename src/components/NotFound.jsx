// 404 Not Found page for unmatched routes
import "../App.css";
const NotFound = () => {
  return (
    <div
      className="child-container"
      style={{ color: "red", fontWeight: "bold", fontSize: "24px" }}
    >
      404 - Page Not Found 😢
    </div>
  );
};

export default NotFound;
