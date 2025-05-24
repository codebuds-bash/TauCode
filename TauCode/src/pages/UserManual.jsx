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
            TauCode <span className="titleAccent">Description </span>
          </h1>
        </header>
        
       <section className="Description">
  <p>
    <strong>TauCode</strong> is a fun, beginner-friendly programming language designed to resemble casual <strong>Haryanvi</strong> or North Indian street slang, making it relatable and humorous for learners. It simplifies JavaScript-like syntax into quirky, conversational phrases — turning code into a mix of tech and regional flavor!
  </p>
  <p>
    Whether you're new to coding or want to enjoy a light-hearted twist on programming, TauCode makes writing and reading code more engaging and culturally fun.
  </p>

  <ul className="featuresList">
    <li>✅ <strong>Desi Style: </strong> TauCode uses phrases like <code>sun le chore</code> or <code>bol bera()</code> to mirror common spoken lingo.</li>
    <li>✅ <strong>JavaScript Compatible:</strong> TauCode gets compiled or interpreted into standard JavaScript under the hood.</li>
    <li>✅ <strong>Easy to Learn:</strong> Designed to make programming concepts approachable using native-like expressions.</li>
    <li>✅ <strong>Fun to Use:</strong> Adds humor and personality to regular coding tasks.</li>
  </ul>
</section>

        <br />




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
        <br />
        <br />

        <header className="header">
          <h1 className="title">
            TauCode <span className="titleAccent">Example </span>
          </h1>
        </header>
        
       <section className="Example flex justify-center top-10">
  <div className="CodeBox">
    <div className="Buttons">
      <span>🔴</span>
      <span>🟡</span>
      <span>🟢</span>
    </div>

    <pre>
      <code>
        <span className="keyword">sun le chore</span>
        {"\n"}
        <span className="keyword">le le</span> x = 5;
        {"\n"}
        <span className="keyword">bol bera</span>
        (<span className="string">"x ka maan hai: "</span> + x);
        {"\n"}
        <span className="keyword">yo ho to</span>(x &gt; 0) {"{"}
        {"\n  "}
        <span className="keyword">bol bera</span>
        (<span className="string">"x positive hai"</span>);
        {"\n"}{"}"}
        <span className="keyword"> na ho to</span> {"{"}
        {"\n  "}
        <span className="keyword">bol bera</span>
        (<span className="string">"x negative ya zero hai"</span>);
        {"\n"}{"}"}
        {"\n"}
        <span className="keyword">jab tak yo ho</span>(x &lt; 10) {"{"}
        {"\n  "}
        <span className="keyword">bol bera</span>
        (<span className="string">"x abhi bhi 10 se chhota hai: "</span> + x);
        {"\n  "}x = x + 1;
        {"\n"}{"}"}
        {"\n"}
        <span className="keyword">ho liya kaam</span>
      </code>
    </pre>
  </div>
</section>

      </article>
    </main>
  );
}
