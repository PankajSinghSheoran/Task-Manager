import Button from './Button';

interface HeaderProps {
  title?: string;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="head-container">
      <header>
        <h1>{props.title}</h1>
        <Button text="Add Task" />
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: 'Task Manager',
};

export default Header;
