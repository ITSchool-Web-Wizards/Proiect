export default function NumberedBtn({ name, isActive, isClicked, index }) {
    return (
      <button aria-selected={isActive ? "true" : "false"} onClick={isClicked} className="bg-transparent text-light">
        <span className="sr-only">{name}</span>{index}
      </button>
    );
  }