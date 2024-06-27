export default function HamburgerBtn( {isVisible, showHamburger} ) {
  return (
    <button
      className="mobile-nav-toggle"
      aria-controls="primary-navigation"
      aria-expanded={isVisible}
      onClick={showHamburger}
    >
      <span className="sr-only">Menu</span>
    </button>
  );
}
