const person = (props) => {
  return (
    <div>
      <p>
        I'm {props.name} and am {props.age} years old.
        {props.children}
      </p>
    </div>
  );
};

export default person;
