import "./App.css";

function App() {
  return (
    <>
      <main className="mx-[10%] md:mx-[20%]">
        <h1 className="main-heading mb-5 font-playfair text-3xl font-bold text-white">
          shasherazi
        </h1>
        <p className="font-inter font-light text-white">
          im shasherazi, a 20 year old{" "}
          <a
            href="https://en.wikipedia.org/wiki/Pakistan"
            className="font-playfair font-normal italic hover:underline"
          >
            pakistani
          </a>{" "}
          coder with too many interests, and almost all of them include
          computers one way or another. like linux, python, rust, chess,
          reading, and learning new things.
        </p>

        <div className="projects">
          <h2 className="mb-5 mt-10 font-playfair text-2xl font-bold text-white">
            projects
          </h2>
          <div className="dotfiles my-5">
            <h3>
              <a
                href="https://github.com/shasherazi/dotfiles"
                className="font-playfair font-bold italic text-white hover:underline"
              >
                dotfiles
              </a>
              <p className="font-inter font-light text-white">
                my dotfiles for my arch linux setup
              </p>
            </h3>
          </div>
          <div className="global-playlist my-5">
            <h3>
              <a
                href="https://global-playlist.vercel.app/"
                className="font-playfair font-bold italic text-white hover:underline"
              >
                globalPlaylist
              </a>
            </h3>
            <p className="font-inter font-light text-white">
              a website where anyone can add any song to a playlist anyone can
              see and listen to
            </p>
          </div>
        </div>
        <div className="contact">
          <h2 className="mb-5 mt-10 font-playfair text-2xl font-bold text-white">
            contact
          </h2>
          <ul className="font-inter font-light text-white">
            <li>
              <a
                href="https://twitter.com/shasherazi"
                className="font-playfair font-normal italic hover:underline"
              >
                shasherazi
              </a>{" "}
              on twitter
            </li>
            <li>
              <a
                href="https://github.com/shasherazi"
                className="font-playfair font-normal italic hover:underline"
              >
                shasherazi
              </a>{" "}
              on github
            </li>
            <li>
              <a
                href="https://linkedin.com/in/shasherazi"
                className="font-playfair font-normal italic hover:underline"
              >
                shasherazi
              </a>{" "}
              on linkedin
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
