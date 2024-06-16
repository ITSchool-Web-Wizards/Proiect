export default function DestContent({ title, description, distance, travel}) {
    return ( 
      <article className="destination-content">
        <h2 className="fs-800 uppercase ff-serif">{title}</h2>
        <p>{description}</p>
        <div className="destination-info flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="ff-serif uppercase">{distance}</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="ff-serif uppercase">{travel}</p>
          </div>
        </div>
      </article>
     );
}