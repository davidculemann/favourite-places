interface PlaceProps {
  name: string;
  location: string;
  imageURL: string;
  imageAlt: string;
}

function Place(props: PlaceProps): JSX.Element {
  const placeStyle: object = {
    textAlign: "center",
    backgroundColor: "#c4af68",
    padding: "20px",
    margin: "10px",
  };

  return (
    <section style={placeStyle}>
      <img
        src={props.imageURL}
        alt={props.imageAlt}
        width="50%"
        height="auto"
      ></img>
      <h2>{props.name}</h2>
      <h3>{props.location}</h3>
    </section>
  );
}

export default Place;
