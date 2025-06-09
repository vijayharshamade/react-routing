import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();

  return <div>User with user id :{userId}</div>;
};

export default User;
