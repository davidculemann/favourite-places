interface HeaderProps {
  color: string;
  backgroundColor: string;
  textAlign: any;
  fontSize: string;
  padding: string;
  margin: string;
}

function Header(): JSX.Element {
  const headerStyle: HeaderProps = {
    color: "white",
    backgroundColor: "#8c223b",
    textAlign: "center",
    fontSize: "50px",
    padding: "20px",
    margin: "10px",
  };
  return <h1 style={headerStyle}>My Favourite Places</h1>;
}

export default Header;
