export default function TabBtn({ title, isActive, isClicked }) {

    return ( 
      <button aria-selected={isActive ? "true" : "false"} 
        className="uppercase ff-sans-cond text-accent bg-transparent letter-spacing-2"
        onClick={isClicked}
      >
        {title}
      </button>
     );
}