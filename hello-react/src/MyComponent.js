const MyComponent = (props) => {
  return (
    <div>
      NEW COMPONENT {props.name}
      <br />
      Children value is {props.children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'REACT',
};

export default MyComponent;
