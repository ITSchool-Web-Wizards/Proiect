export default function CrewContent({ role, name, bio }) {
  return (
    <article className="crew-info flow">
      <header className="flow">
        <h2 className="fs-600 ff-serif uppercase">{role}</h2>
        <p className="fs-700 uppercase ff-serif">{name}</p>
      </header>
      <p className="text-accent">{bio}</p>
    </article>
  );
}
