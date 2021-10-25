//import { TextAlignProperty } from 'csstype'

interface PlaceProps {
  name: string;
  location: string;
  imageURL: string;
  imageAlt: string;
}

interface StyleProps {
  textAlign: any;
  backgroundColor: string;
  padding: string;
  marginRight: string;
  marginLeft: string;
  marginTop: string;
  marginBottom: string;
  borderColor: string;
  borderWidth: string;
  borderStyle: string;
  width: string;
}

function Place(props: PlaceProps): JSX.Element {
  const placeStyle: StyleProps = {
    textAlign: "center",
    backgroundColor: "#c4af68",
    padding: "20px",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "10px",
    marginBottom: "10px",
    borderColor: "green",
    borderWidth: "20px",
    borderStyle: "solid",
    width: "60%",
  };

  return (
    <section style={placeStyle}>
      <img
        src={props.imageURL}
        alt={props.imageAlt}
        width="90%"
        height="auto"
      ></img>
      <h2>{props.name}</h2>
      <h3>{props.location}</h3>
    </section>
  );
}

export default Place;
