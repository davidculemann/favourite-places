import Place from "./Place";

function PlaceList(): JSX.Element {
  return (
    <section>
      <Place
        name={"Whitsundays"}
        location={"Australia"}
        imageURL={
          "https://images.unsplash.com/photo-1600791200866-aa1a25e13191?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3454&q=80"
        }
        imageAlt={"A beach on the Whitsunday Islands"}
      />
    </section>
  );
}

export default PlaceList;

/*
<Place name={'Whitsunday Islands'} />
<Place location={'Australia'} />
<Place imageURL={"https://images.unsplash.com/photo-1600791200866-aa1a25e13191?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3454&q=80"} />
*/
