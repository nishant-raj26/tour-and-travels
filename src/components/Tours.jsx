/* eslint-disable react/prop-types */
import Tour from "./Tour";

// eslint-disable-next-line react/prop-types
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2> Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {" "}
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}{" "}
      </div>
    </section>
  );
};

export default Tours;
