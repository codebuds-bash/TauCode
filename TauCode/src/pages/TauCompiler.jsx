import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { motion, AnimatePresence } from 'framer-motion';
import MonacoEditor from '@monaco-editor/react';
import axios from 'axios';

import '../monaco-overrides.css';

import { FiPlay, FiDownload, FiUser, FiLogOut, FiLogIn, FiEdit, FiAlignLeft  } from 'react-icons/fi';
import '../App.css';

// Components   
import AuthModal from '../components/AuthModal';
import CodeHistory from '../components/CodeHistory';
import TerminalOutput from '../components/TerminalOutput';
import LanguageSelector from '../components/LanguageSelector';
import ThemeToggle from '../components/ThemeToggle';

function TauCompiler() {
  const [user, setUser] = useState(null);
  const [code, setCode] = useState(`//Example dekhle pehle fir dhawa boliyo
sun le chore     //to start the program:optional


le le x = 5;   //variable declaration
bol bera("x ka maan hai: " + x);    //to print 


yo ho to(x > 0) {    //if statement
  bol bera("x positive hai");
} 
  na ho to {     //else statement
  bol bera("x negative ya zero hai");
}

jab tak yo ho(x < 10) {     //while loop
  bol bera("x abhi bhi 10 se chhota hai: " + x);
  x = x + 1;
}
ho liya kaam    //end the program:optional`);

  const [output, setOutput] = useState("No output yet. Run your code to see results here.");
  const [language, setLanguage] = useState('tau');
  const [isRunning, setIsRunning] = useState(false);
  const [theme, setTheme] = useState('vs-dark');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState('login');
  const [activeTab, setActiveTab] = useState('editor');
  const navigate = useNavigate();

  const tauKeywords = [
    'sun', 'le', 'chore', 'ho', 'liya', 'kaam',
    'bol', 'bera', 'yo', 'to', 'na', 'jab', 'tak', 'pooch'
  ];

  function handleClick(){
    navigate('/documentation');
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch {
        localStorage.removeItem('token');
      }
    }
  }, []);

  

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const runCode = () => {
    setIsRunning(true);
    const logs = [];
    const originalConsoleLog = console.log;

    console.log = function (...args) {
      logs.push(args.join(" "));
      originalConsoleLog.apply(console, args);
    };

    try {
      if (language === 'tau') {
  let translated = code
    // Remove desi comments or instructions
    .replace(/^sun le chore.*$/gm, "")
    .replace(/^ho liya kaam.*$/gm, "")
    .replace(/^#.*$/gm, "")

    // Variable declaration
    .replace(/\ble le\b/g, "var")                  // le le x = 5
    .replace(/\butha le\b/g, "let")                // utha le x = 10
    .replace(/\bmat badal\b/g, "const")            // mat badal PI = 3.14

    // Printing output
    .replace(/\bbol bera\s*\((.*?)\)/g, "console.log($1)") // bol bera("Ram Ram");

    // Conditional statements
    .replace(/\byo ho to\b/g, "if")                // yo ho to (x == 5)
    .replace(/\bna ho to\b/g, "else")              // na ho to
    .replace(/\bwarna agar\b/g, "else if")         // warna agar (x == 2)

    // Loops
    .replace(/\bjab tak yo ho\b/g, "while")        // jab tak yo ho (x < 10)
    .replace(/\baar baar\b/g, "for")               // baar baar (i = 0; i < 5; i++)

    // Functions
    .replace(/\bkaam\b/g, "function")              // kaam greet() { }
    .replace(/\bwapis bhej\b/g, "return")          // wapis bhej x;

    // Input
    .replace(/\bpooch le\(\)/g, "prompt()")        // var name = pooch le();

    // Comparisons
    .replace(/\bbhai ho\b/g, "==")                 // if (x bhai ho 10)
    .replace(/\bbhai bilkul ho\b/g, "===")         // if (x bhai bilkul ho 10)
    .replace(/\bberabar na ho\b/g, "!=")           // if (x berabar na ho 5)

    // Math
    .replace(/\bjod\b/g, "+")                      // x = 2 jod 3;
    .replace(/\bgata\b/g, "-")                     // x = 5 gata 2;
    .replace(/\bguna\b/g, "*")                     // x = 5 guna 2;
    .replace(/\bbhaag\b/g, "/")                    // x = 10 bhaag 2;

    // Logical
    .replace(/\bya to\b/g, "||")                   // if (x == 1 ya to x == 2)
    .replace(/\bara\b/g, "&&")                     // if (x == 1 ara x < 10)

    // Clean up
    .replace(/\n{2,}/g, "\n");                     // remove extra blank lines

  eval(translated);
}
 else {
        const wrappedCode = `(function() {\n${code}\n})();`;
        eval(wrappedCode);
      }
    } catch (err) {
      logs.push("❌ Error: " + err.message);
    } finally {
      console.log = originalConsoleLog;
      setOutput(logs.length === 0 ? "👳‍♂️ Ladle Code chal rya tha, par kuch na hoya." : logs.join("\n"));
      setIsRunning(false);
    }
  };

  const downloadCode = () => {
    const extension = getFileExtension(language);
    const element = document.createElement('a');
    const file = new Blob([code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `codebuds-${Date.now()}.${extension}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const getFileExtension = (lang) => {
    const extensions = {
      'javascript': 'js',
      'python': 'py',
      'java': 'java',
      'go': 'go',
      'c': 'c',
      'cpp': 'cpp',
      'ruby': 'rb',
      'rust': 'rs',
      'tau': 'js'
    };
    return extensions[lang] || 'txt';
  };

  const handleAuth = (type) => {
    setAuthType(type);
    setShowAuthModal(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const setupMonacoTauLanguage = (monaco) => {
    monaco.languages.register({ id: 'tau' });
    
    monaco.languages.setMonarchTokensProvider('tau', {
      keywords: tauKeywords,
      tokenizer: {
        root: [
          [new RegExp(`\\b(${tauKeywords.join('|')})\\b`, 'i'), 'keyword.tau'],
          [/".*?"/, 'string.tau'],
          [/'.*?'/, 'string.tau'],
          [/\/\/.*$/, 'comment.tau'],
          [/\/\*.*?\*\//, 'comment.tau'],
        ]
      }
    });

    monaco.languages.registerCompletionItemProvider('tau', {
      provideCompletionItems: () => {
        return {
          suggestions: tauKeywords.map(keyword => ({
            label: keyword,
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: keyword
          }))
        };
      }
    });
  };

  return (
    <div className={`app ${theme === 'vs-dark' ? 'dark' : 'light'}`}>
      <nav className="navbar">
        <motion.div
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" target="_blank" rel="noopener noreferrer">
            <div className="logodiv flex justify-start items-center gap-2">   
              <div className="logotext">
                <span className='span1 text-black font-light  '>Desi </span> <span className='span2 text-black font-extralight '> Code </span>
              </div>
              <div className="logoimage">
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Disguised%20Face.png" alt="Disguised Face" width="50" height="50" />
              </div>
            </div>
          </a>
        </motion.div>

        <div className="navbar-controls">
          <LanguageSelector language={language} setLanguage={setLanguage} />

          <motion.button
            className="run-button"
            onClick={runCode}
            disabled={isRunning}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiPlay className="icon" />
            {isRunning ? 'Running...' : 'Run'}
          </motion.button>

          <motion.button
            className="download-button"
            onClick={downloadCode}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload className="icon" />
            Download
          </motion.button>

          <motion.button
            className="Use-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
          >
            <FiAlignLeft className="icon" />
            User manual
          </motion.button>
        </div>

        

        <div className="navbar-actions">
          <ThemeToggle theme={theme} setTheme={setTheme} />

          {user ? (
            <div className="user-dropdown">
              <motion.button className="user-button" whileHover={{ scale: 1.05 }}>
                <FiUser className="icon" />
                <span>{user.username}</span>
              </motion.button>
              <div className="dropdown-menu">
                <button onClick={() => setActiveTab('history')}>
                  <FiEdit className="icon" />
                  History
                </button>
                <button onClick={handleLogout}>
                  <FiLogOut className="icon" />
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <motion.button
                className="auth-button"
                onClick={() => handleAuth('login')}
                whileHover={{ scale: 1.05 }}
              >
                <FiLogIn className="icon" />
                Login
              </motion.button>
              <motion.button
                className="auth-button primary"
                onClick={() => handleAuth('register')}
                whileHover={{ scale: 1.05 }}
              >
                <FiEdit className="icon" />
                Register
              </motion.button>
            </>
          )}
        </div>
      </nav>

      <main className="main-content">
        <AnimatePresence mode="wait">
          {activeTab === 'editor' ? (
            <motion.div
              key="editor"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="editor-container"
            >
              <MonacoEditor
                height="65vh"
                language={language}
                theme={theme}
                value={code}
                onChange={handleEditorChange}
                options={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 14,
                  lineHeight: 24,
                  fontWeight: '400',
                  fontLigatures: true,
                  minimap: { enabled: true },
                  scrollBeyondLastLine: false,
                  wordWrap: 'on',
                  automaticLayout: true,
                  smoothScrolling: true,
                  cursorBlinking: 'smooth',
                  cursorSmoothCaretAnimation: true,
                  renderWhitespace: 'selection',
                  bracketPairColorization: {
                    enabled: true,
                    independentColorPoolPerBracketType: true
                  },
                  guides: {
                    bracketPairs: 'active'
                  }
                }}
                beforeMount={(monaco) => {
                  monaco.editor.defineTheme('custom-dark', {
                    base: 'vs-dark',
                    inherit: true,
                    rules: [
                      { token: 'keyword.tau', foreground: '#569CD6', fontStyle: 'bold' },
                      { token: 'string.tau', foreground: '#CE9178' },
                      { token: 'comment.tau', foreground: '#6A9955' }
                    ],
                    colors: {
                      'editor.background': '#1e1e1e',
                      'editor.lineHighlightBackground': '#282828',
                      'editor.lineHighlightBorder': '#282828'
                    }
                  });
                  setupMonacoTauLanguage(monaco);
                }}
                onMount={(editor, monaco) => {
                  editor.updateOptions({
                    fontFamily: '"JetBrains Mono", monospace'
                  });
                  monaco.editor.setTheme('custom-dark');
                }}
              />
              <TerminalOutput output={output} />
            </motion.div>
          ) : (
            <motion.div
              key="history"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="history-container"
            >
              <CodeHistory
                user={user}
                setCode={setCode}
                setActiveTab={setActiveTab}
                setLanguage={setLanguage}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {showAuthModal && (
          <AuthModal
            type={authType}
            onClose={() => setShowAuthModal(false)}
            setUser={setUser}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default TauCompiler;