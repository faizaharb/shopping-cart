import React from "react";
import "../../css/Header/Header.css";
import words from "../../words";

export default function Header() {
  return (
    <header>
      <h2>{words.headerTitle}</h2>
    </header>
  );
}
