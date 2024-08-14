export default function NumberedTitle({ number, title }) {
  return (
    <h1 className="numbered-title">
      <span aria-hidden="true">{number}</span>
      {title}
    </h1>
  );
}
