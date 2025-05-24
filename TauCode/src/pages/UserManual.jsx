import React from "react";
import { FiCode, FiPlay, FiLogIn, FiCommand, FiCornerUpLeft, FiHelpCircle, FiAlertCircle } from "react-icons/fi";
import "../styles/UserManual.css"; // Ensure you have the correct path to your CSS file

const keywords = [
  {
    keyword: "sun le chore",
    explanation: "Start of the TauCode program, similar to 'function main()' (optional)",
    icon: <FiHelpCircle size={24} color="#F6A83B " />,
  },
  {
    keyword: "ho liya kaam",
    explanation: "End of the TauCode program, similar to 'function main()' (optional).",
    icon: <FiAlertCircle size={24} color="#3BF682 " />,
  },
  {
    keyword: "# comment",
    explanation: "Lines starting with '# or //' are comments and removed from output.",
    icon: <FiCommand size={24} color="#111827 " />,
  },
  {
    keyword: "le le",
    explanation: "Used to declare variables, le le x = 5;",
    icon: <FiCode size={24} color="#F63B82 " />,
  },
  {
    keyword: "bol bera()",
    explanation: "Print statement, used for logging output.",
    icon: <FiLogIn size={24} color="#6366F1" />,
  },
  {
    keyword: "yo ho to(condition)",
    explanation: "Represents an 'if' condition in the code.",
    icon: <FiPlay size={24} color="#F87171" />,
  },
  {
    keyword: "na ho to",
    explanation: "Represents an 'else' condition.",
    icon: <FiCornerUpLeft size={24} color="#FBBF24" />,
  },
  {
    keyword: "jab tak yo ho(condition)",
    explanation: "Used to create 'while' loops.",
    icon: <FiCode size={24} color="#FDBA74" />,
  },
  {
    keyword: "pooch le()",
    explanation: "Used for taking input from users,for example:  le le x = pooch le();",
    icon: <FiHelpCircle size={24} color="#3BF6F0" />,
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
