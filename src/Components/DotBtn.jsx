export default function DotBtn({ role, isActive, isClicked }) {
  return (
    <button aria-selected={isActive ? "true" : "false"} onClick={isClicked}>
      <span className="sr-only">The {role}</span>
    </button>
  );
}
