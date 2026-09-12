//A wrapper component in React is a component that acts as a container to enclose other components or HTML elements. It captures whatever is passed inside its opening and closing tags using React’s built-in children prop and renders it within a shared layout, style, or logic layer.
// Wrappers are foundational for building reusable layouts, injecting global themes, managing context providers, or enforcing access control (like authenticating a route)

import { useState } from "react";

export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
