export default function TechnologyContent({ name, description }) {
  return (
    <article className="technology-info flow">
      <header className="flow">
        <h2 className="fs-600 ff-serif uppercase">The terminology...</h2>
        <p className="fs-700 uppercase ff-serif">{name}</p>
      </header>
      <p className="text-accent">{description}</p>
    </article>
  );
}
