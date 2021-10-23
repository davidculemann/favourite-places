interface PlaceProps {
  name: string;
  location: string;
  imageURL: string;
  imageAlt: string;
}

function Place(props: PlaceProps): JSX.Element {
  return (
    <>
      <img
        src={props.imageURL}
        alt={props.imageAlt}
        width="400px"
        height="auto"
      ></img>
      <h2>{props.name}</h2>
      <h3>{props.location}</h3>
    </>
  );
}

export default Place;
