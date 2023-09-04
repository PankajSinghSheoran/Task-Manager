interface ButtonProps {
  text?: string;
}

const Button = (props: ButtonProps) => {
  const onclick = () => {
    console.log('click');
  };
  return (
    <>
      <button onClick={onclick} className="btn btn-primary">
        {props.text}
      </button>
    </>
  );
};

export default Button;
