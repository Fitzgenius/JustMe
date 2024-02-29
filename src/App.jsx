import me from "./assets/me.png";
import github from "./assets/github-mark-white.svg";
import linkedin from "./assets/icons8-linkedin.svg";

const App = () => {
  return (
    <>
      <div id="container">
        <header>
          <h1>
            Hello, my name is <span>Nathan Fitzgerald</span>
          </h1>
          <p>Frontend Developer based in Peterborough, UK</p>
        </header>
        <img
          src={me}
          alt="Nathan Fitzgerald looking cool on guitar on a bouncy castle"
        />
        <main>
          <p>
            I make websites nowadays using <strong>React</strong> or{" "}
            <strong>Vue</strong>
            <br />
            Feel free to check me out on socials
          </p>
          <ul>
            <li>
              <a href="https://github.com/Fitzgenius/" target="_blank">
                <img src={github} alt="Fitzgenius on GitHub" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/fitzgenius/" target="_blank">
                <img src={linkedin} alt="Fitzgenius on LinkedIn" />
              </a>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
};

export default App;
