"use client";

type BurgerMenuProps = {
  isOpen: boolean;
  onClick: () => void;
};

const BurgerMenu = ({ isOpen, onClick }: BurgerMenuProps) => {
  return (
    <button
      type="button"
      className={`burger-menu-container ${isOpen ? "open" : ""}`}
      onClick={onClick}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
    >
      <span className="line line1"></span>
      <span className="line line2"></span>
      <span className="line line3"></span>
    </button>
  );
};

export default BurgerMenu;
