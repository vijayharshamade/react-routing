// 404 Not Found page for unmatched routes
import "../App.css";
const NotFound = () => {
  return (
    <div
      className="child-container"
      style={{ color: "red", fontWeight: "bold", fontSize: "24px" }}
    >
      404 - This is custome Not Found Page for Layout child route 😢 <br />✅
      Best Practice: Use top-level wildcard (path: "*"), not one in each nested
      route 💡 Why? Keeps your route config clean and DRY (Don't Repeat
      Yourself) React Router will fall through to the top-level * if no match is
      found at any level You don't need to repeat path: "*" inside every child
      route group, unless you want custom 404s per section
    </div>
  );
};

export default NotFound;
