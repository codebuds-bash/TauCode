import React from "react";
import { Link } from "react-router-dom";
import {
  FiHelpCircle,
  FiAlertCircle,
  FiCommand,
  FiCode,
  FiLogIn,
  FiPlay,
  FiCornerUpLeft,
  FiCornerRightDown,
  FiTerminal,
  FiRepeat,
  FiUnlock,
  FiUpload,
  FiChevronRight,
  FiDivideSquare,
  FiPercent,
  FiPlusCircle,
  FiMinusCircle,
  FiXCircle,
  FiDivideCircle,
  FiGitBranch,
} from "react-icons/fi";
import "../styles/UserManual.css"; // Ensure you have the correct path to your CSS file



const keywords = [
  {
    keyword: "sun le chore",
    explanation:
      "Start of the DesiCode program, similar to 'function main()' (optional).",
    icon: <FiHelpCircle size={24} color="#F6A83B" />,
  },
  {
    keyword: "ho liya kaam",
    explanation:
      "End of the DesiCode program, similar to closing main() (optional).",
    icon: <FiAlertCircle size={24} color="#3BF682" />,
  },
  {
    keyword: "# comment",
    explanation:
      "Lines starting with # are comments. Used to gossip with your future self.",
    icon: <FiCommand size={24} color="#111827" />,
  },
  {
    keyword: "le le",
    explanation: "Declares a variable (like 'var'), e.g. le le x = 5;",
    icon: <FiCode size={24} color="#F63B82" />,
  },
  {
    keyword: "utha le",
    explanation: "Declares a block-scoped variable (like 'let').",
    icon: <FiUpload size={24} color="#0EA5E9" />,
  },
  {
    keyword: "mat badal",
    explanation: "Declares a constant value (like 'const').",
    icon: <FiUnlock size={24} color="#8B5CF6" />,
  },
  {
    keyword: "bol bera()",
    explanation: "Logs output (console.log), for expressing your feelings.",
    icon: <FiLogIn size={24} color="#6366F1" />,
  },
  {
    keyword: "yo ho to (condition)",
    explanation: "Represents an if-statement. Trust issues? Use this.",
    icon: <FiPlay size={24} color="#F87171" />,
  },
  {
    keyword: "na ho to",
    explanation: "Represents the else condition, because not everything goes right.",
    icon: <FiCornerUpLeft size={24} color="#FBBF24" />,
  },
  {
    keyword: "warna agar (condition)",
    explanation: "Represents else-if — because tau needs options.",
    icon: <FiCornerRightDown size={24} color="#34D399" />,
  },
  {
    keyword: "jab tak yo ho (condition)",
    explanation: "Represents a while loop — tau keeps checking till satisfied.",
    icon: <FiRepeat size={24} color="#FDBA74" />,
  },
  {
    keyword: "baar baar (init; cond; inc)",
    explanation: "Represents a for loop. Repetition is tradition.",
    icon: <FiGitBranch size={24} color="#4ADE80" />,
  },
  {
    keyword: "kaam",
    explanation: "Defines a function — aka 'Tau’s secret recipe'.",
    icon: <FiTerminal size={24} color="#FB923C" />,
  },
  {
    keyword: "wapis bhej",
    explanation: "Used to return a value from a function.",
    icon: <FiChevronRight size={24} color="#3B82F6" />,
  },
  {
    keyword: "pooch le()",
    explanation: "Used to take input from the user (like prompt()).",
    icon: <FiHelpCircle size={24} color="#3BF6F0" />,
  },
  {
    keyword: "bhai ho",
    explanation: "Equality check (==) — just casually asking.",
    icon: <FiDivideSquare size={24} color="#FACC15" />,
  },
  {
    keyword: "bhai bilkul ho",
    explanation: "Strict equality check (===) — when tau wants no confusion.",
    icon: <FiPercent size={24} color="#E879F9" />,
  },
  {
    keyword: "berabar na ho",
    explanation: "Represents '!=' — because tau doesn’t like everything.",
    icon: <FiDivideSquare size={24} color="#F43F5E" />,
  },
  {
    keyword: "jod",
    explanation: "Addition operator (+) — tau loves to add masala.",
    icon: <FiPlusCircle size={24} color="#10B981" />,
  },
  {
    keyword: "gata",
    explanation: "Subtraction operator (-) — like removing salt from chai.",
    icon: <FiMinusCircle size={24} color="#EF4444" />,
  },
  {
    keyword: "guna",
    explanation: "Multiplication operator (*) — like multiplying jugaad.",
    icon: <FiXCircle size={24} color="#FBBF24" />,
  },
  {
    keyword: "bhaag",
    explanation: "Division operator (/) — sometimes tau splits the bill.",
    icon: <FiDivideCircle size={24} color="#60A5FA" />,
  },
  {
    keyword: "ya to",
    explanation: "Logical OR (||) — Tau loves multiple options.",
    icon: <FiCommand size={24} color="#F97316" />,
  },
  {
    keyword: "ara",
    explanation: "Logical AND (&&) — Conditions tau fully trusts.",
    icon: <FiCommand size={24} color="#10B981" />,
  },
];

export default function UserManual() {
  return (
    
    

    <div className="UserParent flex flex-col  min-h-screen ">
      <div className="navbarUser ">
        <ul className="flex justify-between  ">
          <li className="Userli text-2xl bg-black text-white  "><Link to ='/'>Home</Link></li>
          
          <div className="logo-img-text flex items-center justify-center gap">
            <div className="logotext">
            <span className='span1 text-black font-light text-7xl '>Desi </span>
            <span className='span2 text-black font-light text-5xl '> Code </span>
          </div>
          <div className="logoimage flex justify-center items-center">
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Disguised%20Face.png" alt="Disguised Face" width="50" height="50" />
          </div>
          </div>


          <li className="Userli text-2xl bg-black text-white " ><Link to ="/compiler"> PlayGround</Link> </li>
        </ul>
      </div>
      
      <main className="container">
      <article className="card">
        <header className="header">
          <h1 className="title">
            DesiCode <span className="titleAccent">Description </span>
          </h1>
        </header>

        <section className="Description">
          <p>
            <strong>DesiCode</strong> is a fun, beginner-friendly programming
            language designed to resemble casual <strong>Haryanvi</strong> or
            North Indian street slang, making it relatable and humorous for
            learners. It simplifies JavaScript-like syntax into quirky,
            conversational phrases — turning code into a mix of tech and
            regional flavor!
          </p>
          <p>
            Whether you're new to coding or want to enjoy a light-hearted twist
            on programming, DesiCode makes writing and reading code more
            engaging and culturally fun.
          </p>

          <ul className="featuresList">
            <li>
              ✅ <strong>Desi Style: </strong> DesiCode uses phrases like{" "}
              <code>sun le chore</code> or <code>bol bera()</code> to mirror
              common spoken lingo.
            </li>
            <li>
              ✅ <strong>JavaScript Compatible:</strong> DesiCode gets compiled
              or interpreted into standard JavaScript under the hood.
            </li>
            <li>
              ✅ <strong>Easy to Learn:</strong> Designed to make programming
              concepts approachable using native-like expressions.
            </li>
            <li>
              ✅ <strong>Fun to Use:</strong> Adds humor and personality to
              regular coding tasks.
            </li>
          </ul>
        </section>

        <br />

        <header className="header">
          <h1 className="title">
            DesiCode <span className="titleAccent">Keyword Guide</span>
          </h1>
          <p className="subtitle">
            Understand each DesiCode keyword with simple explanations.
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
            DesiCode <span className="titleAccent">Example </span>
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
                <span className="keyword">bol bera</span>(
                <span className="string">"x ka maan hai: "</span> + x);
                {"\n"}
                <span className="keyword">yo ho to</span>(x &gt; 0) {"{"}
                {"\n  "}
                <span className="keyword">bol bera</span>(
                <span className="string">"x positive hai"</span>);
                {"\n"}
                {"}"}
                <span className="keyword"> na ho to</span> {"{"}
                {"\n  "}
                <span className="keyword">bol bera</span>(
                <span className="string">"x negative ya zero hai"</span>);
                {"\n"}
                {"}"}
                {"\n"}
                <span className="keyword">jab tak yo ho</span>(x &lt; 10) {"{"}
                {"\n  "}
                <span className="keyword">bol bera</span>(
                <span className="string">"x abhi bhi 10 se chhota hai: "</span>{" "}
                + x);
                {"\n  "}x = x + 1;
                {"\n"}
                {"}"}
                {"\n"}
                <span className="keyword">ho liya kaam</span>
              </code>
            </pre>
          </div>
        </section>
      </article>
    </main>
    </div>
    
  );
}
