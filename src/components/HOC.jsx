const User = ({ name, extraInfo }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{extraInfo}</p>
    </div>
  );
};

const withExtraInfo = (WrapperComponent) => {
  return (props) => {
    const extraInfo = "Injected By Hoc";
    return <WrapperComponent {...props} extraInfo={extraInfo} />;
  };
};

const EnhancedUser = withExtraInfo(User);

const HOC = () => {
  return (
    <div>
      <h1>Hoc</h1>
      <EnhancedUser name="vijay" />
    </div>
  );
};

export default HOC;
