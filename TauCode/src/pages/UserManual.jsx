import React from "react";
import { FiCode, FiPlay, FiLogIn, FiCommand, FiCornerUpLeft, FiHelpCircle, FiAlertCircle } from "react-icons/fi";
import "../styles/UserManual.css"; // Ensure you have the correct path to your CSS file

const keywords = [
  {
    keyword: "sun le chore",
    explanation: "This line is removed during translation, usually comments or irrelevant lines.",
    icon: <FiHelpCircle size={24} color="#3b82f6" />,
  },
  {
    keyword: "ho liya kaam",
    explanation: "Another line removed during translation, often used as end markers.",
    icon: <FiAlertCircle size={24} color="#3b82f6" />,
  },
  {
    keyword: "# comment",
    explanation: "Lines starting with '#' are comments and removed from output.",
    icon: <FiCommand size={24} color="#3b82f6" />,
  },
  {
    keyword: "le le",
    explanation: "Used to declare variables, translated to 'var' in JS.",
    icon: <FiCode size={24} color="#3b82f6" />,
  },
  {
    keyword: "bol bera()",
    explanation: "This translates to 'console.log()', used for logging output.",
    icon: <FiLogIn size={24} color="#3b82f6" />,
  },
  {
    keyword: "yo ho to",
    explanation: "Represents an 'if' condition in the code.",
    icon: <FiPlay size={24} color="#3b82f6" />,
  },
  {
    keyword: "na ho to",
    explanation: "Represents an 'else' condition.",
    icon: <FiCornerUpLeft size={24} color="#3b82f6" />,
  },
  {
    keyword: "jab tak yo ho",
    explanation: "Used to create 'while' loops.",
    icon: <FiCode size={24} color="#3b82f6" />,
  },
  {
    keyword: "pooch le()",
    explanation: "Translates to 'prompt()', used for user input.",
    icon: <FiHelpCircle size={24} color="#3b82f6" />,
  },
];

export default function UserManual() {
  return (
    <main className="container">
      <article className="card">
        <header className="header">
          <h1 className="title">
            TauCode <span className="titleAccent">Keyword Guide</span>
          </h1>
          <p className="subtitle">
            Understand each TauCode keyword with simple explanations.
          </p>
        </header>

        <section className="keywordsGrid">
          {keywords.map(({ keyword, explanation, icon }) => (
            <div key={keyword} className="keywordCard">
              <div className="iconWrapper">{icon}</div>
              <h3 className="keywordTitle">{keyword}</h3>
              <p className="keywordExplanation">{explanation}</p>
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}
