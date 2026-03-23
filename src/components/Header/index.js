import {Component} from 'react'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="mainContainer">
        <h1 className="name">Gupta Projects</h1>
        <a
          href="https://github.com/lnguptavema"
          target="_blank"
          rel="noreferrer"
        >
          <h3> My Github: https://github.com/lnguptavema</h3>{' '}
        </a>

        <a
          href="https://www.linkedin.com/in/v-l-n-gupta/"
          target="_blank"
          rel="noreferrer"
        >
          <h3> My Linkedin: https://www.linkedin.com/in/v-l-n-gupta/</h3>{' '}
        </a>

        {/* <h1 className="frontend">Frontend Projects</h1> */}
        <h1 className="reactHeading">ReactJS Projects</h1>
        <ul className="ulContainer">
          <li className="listContainer">
            <video width="220" height="350" controls>
              <track
                kind="captions"
                src="captions.vtt"
                srcLang="en"
                label="English"
              />
              <source
                src="https://res.cloudinary.com/dqvj28bsp/video/upload/v1771158601/my-tasks-output_euknnd.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h1 className="nameProject">My Tasks App</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://mytasks44vlng.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">mytasks44vlng.ccbp.tech</p>
              </a>
              <a
                href="https://github.com/lnguptavema/myTasks_react_44"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github Code</h4>
              </a>
            </div>
          </li>
          <li className="listContainer">
            <video width="220" height="350" controls>
              <track
                kind="captions"
                src="captions.vtt"
                srcLang="en"
                label="English"
              />
              <source
                src="https://res.cloudinary.com/dqvj28bsp/video/upload/v1770814034/nxt-watch-output_s5ileh.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h1 className="nameProject">Nxt Watch App</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://nxtwatch43vlng.ccbp.tech/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">nxtwatch43vlng.ccbp.tech</p>
              </a>
              <a
                href="https://github.com/lnguptavema/nxtwatch_react_43"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github Code</h4>
              </a>
            </div>
          </li>
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/0f0b280dadf8e1b82e9a2826e88d735a2c28a3db1ab06cce85da6395ba5260dc/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f726f636b2d70617065722d73636973736f72732d6f75747075742e676966"
              alt="gif"
            />
            <h1 className="nameProject">Rock Paper Game</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="http://rockgame42.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">rockgame42.ccbp.tech</p>
              </a>
              <a
                href="https://github.com/lnguptavema/rock_paper_scissor_react_42"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github Code</h4>
              </a>
            </div>
          </li>
          <li className="listContainer">
            <video width="220" height="350" controls>
              <track
                kind="captions"
                src="captions.vtt"
                srcLang="en"
                label="English"
              />
              <source
                src="https://assets.ccbp.in/frontend/content/react-js/prime-video-output.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h1 className="nameProject">Prime Video</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://primevideo41.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">primevideo41.ccbp.tech</p>
              </a>
              <a
                href="https://github.com/lnguptavema/primevideo_react_41"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github Code</h4>
              </a>
            </div>
          </li>
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/5e6490def28a2435e2aa488086a33f9e06873152df86cb28cff37512b85f492c/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f636362702d74696d656c696e652d6f75747075742e676966"
              alt="gif"
            />
            <h1 className="nameProject">ccbp Journey Chrono</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://ccbpjrneyvlng38.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">ccbpjrneyvlng38.ccbp.tech</p>
              </a>
              <a
                href="https://github.com/lnguptavema/ccbpJourney_react_38"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github Code</h4>
              </a>
            </div>
          </li>
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/625b98c95952be8b0d38604f4ae178288a50c98a0d1f6d2ddbfd5c5009b9c287/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f6772616469656e742d67656e657261746f722d6f75747075742d76302e676966"
              alt="gif"
            />
            <h1 className="nameProject">Gradient Generator</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://grdientvlng37.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">grdientvlng37.ccbp.tech</p>
              </a>
              <a
                href="https://github.com/lnguptavema/gradient_generator_react_37"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github Code</h4>
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/a92d7bc56e04c2bcd3df56cf80830800ced8bdf46cc2f24bac83246ad5dfb3d1/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f6d656d652d67656e657261746f722d6f75747075742e676966"
              alt="gif"
            />
            <h1 className="nameProject">Meme Generator</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://memegen36vlng.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">memegen36vlng.ccbp.tech</p>
              </a>
              <a
                href="https://github.com/lnguptavema/meme_generator_react_36"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github Code</h4>
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/d663bbbbcabc19298a848244a8e0042de4ea834a1df287a4b592f875c8b14180/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f6c61796f75742d6275696c6465722d6f75747075742e676966"
              alt="gif"
            />
            <h1 className="nameProject">Layout Builder</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://layout35vlng.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">layout35vlng.ccbp.tech</p>
              </a>
              <a
                href="https://github.com/lnguptavema/layout_builder_react_35"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github Code</h4>
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/b5d56bd774385b60ec7e50a3ae13f60aa29a65c3bd28246f814d85d109879529/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f6769746875622d706f70756c61722d7265706f732d6f75747075742e676966"
              alt="gif"
            />
            <h1 className="nameProject">Github Popular Repos</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://gitrepo33.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">gitrepo33.ccbp.tech</p>
              </a>{' '}
              <a
                href="https://github.com/lnguptavema/git_repos_react_33"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github Code</h4>
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://res.cloudinary.com/dqvj28bsp/image/upload/v1762263164/jobby-app-success-output-v0_a8pjge.gif"
              alt="gif"
            />
            <h1 className="nameProject">Jobby App</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://jobbygupta34.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">jobbygupta34.ccbp.tech</p>
              </a>{' '}
              <a
                href="https://github.com/lnguptavema/jobby_app_34.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github Code</h4>
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-protected-route-output.gif"
              alt="gif"
            />
            <h1 className="nameProject">Nxt Trendz App</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://nxttrendz30vlng.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">nxttrendz30vlng.ccbp.tech</p>
              </a>{' '}
              <a
                href="https://github.com/lnguptavema/nxt_authentication_react_30.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github Code</h4>
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/947b8d283b2eb05b8233726b388f43d14f59039ba95c3bf927ad61ea8b016a5e/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f63727970746f63757272656e63792d747261636b65722d6f75747075742e676966"
              alt="gif"
            />
            <h1 className="nameProject">Cryptocurrency Tracker</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://crypto28.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://crypto28.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/cryptocurrency_react_28"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github Code</h4>
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/b63ad2bfd945ece1066a5f0f3145bc92fcf429ccfa8015090a9634f2bc497a2a/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f69706c2d64617368626f6172642d6f75747075742d76322e676966"
              alt="gif"
            />
            <h1 className="nameProject">IPL Dashboard App</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://iplvlng29.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://iplvlng29.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/ipl_react_29"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github Code</h4>
              </a>{' '}
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/b5b1c349661f70270e728b28756c2ff269547e7a7b2d4beb15e1c7aa834bbdda/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f66657463682d616e642d726f7574696e672d70726163746963652d6f75747075742e676966"
              alt="gif"
            />
            <h1 className="nameProject">Blog fetch App</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://fetchblog27.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://fetchblog27.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/blog_fetch_react_27"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/3874838dc59a5c3d3c07f2323ade11f2515c9445e137473bbc5c5c01ad666017/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f666171732d6f75747075742d76332e676966"
              alt="gif"
            />
            <h1 className="nameProject">Faqs App</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://faqsapp25vlng.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://faqsapp25vlng.ccbp.tech/</p>
              </a>{' '}
              <a
                href="https://github.com/lnguptavema/faqsapp_react_25"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <video
              className="listlogoVideo"
              width="400"
              height="300"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://res.cloudinary.com/dqvj28bsp/video/upload/v1761232861/match-game-output_c4ty8i.mp4"
                type="video/mp4"
              />
              <track kind="captions" />
            </video>
            <h1 className="nameProject">Match Game</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://matchgame23.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://matchgame23.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/Match_game_react_23"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/23d2b70009540e0b121fb001c15d9d984996bcbd3516a3ab893a697a85218cea/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f706173736f7772642d6d616e616765722d6f75747075742d76302e676966"
              alt="gif"
            />
            <h1 className="nameProject">Password Manager</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="	https://passwordmgr22.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://passwordmgr22.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/password_manager_react_22"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/f615beb6be28c24914ec313037e89e269cde5c251030c858a85282c754d97de7/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f73746f7077617463682d6f75747075742d76322e676966"
              alt="gif"
            />
            <h1 className="nameProject">Stop Watch</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://stopwatchvlng21.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://stopwatchvlng21.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/stopwatch_react_21"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/4502547edd208e59dc993f474d72ab083c611af82d62396a1a691853212dcbfe/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f656d6f6a692d67616d652d6f75747075742d76322e676966"
              alt="gif"
            />
            <h1 className="nameProject">Emoji Game</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://emojivlng20.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://emojivlng20.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/emoji_game_react_20"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/32ade7eb46eef49d86690fe621820d3e935f012876ba8d41ec86440afcdbc98d/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f6469676974616c2d74696d65722d6f75747075742e676966"
              alt="gif"
            />
            <h1 className="nameProject">Digital Clock</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://clockvlng19.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://clockvlng19.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/digital_clock_react_19"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/753bc8fa2e05fda2327734938a19f17459abf715d2bb2a40102bdb19e3922809/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f6d6f6e65792d6d616e616765722d6f75747075742e676966"
              alt="gif"
            />
            <h1 className="nameProject">Money Manager</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://moneyvlng18.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://moneyvlng18.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/money_react_18"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/abef588ffbf6fd834a77b4414e4566f91d76af760e3d95884fafa281783a2e43/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f6170706f696e746d656e74732d6170702d6f75747075742e676966"
              alt="gif"
            />
            <h1 className="nameProject">Appointment</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://appointment17.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://appointment17.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/appointment_react_17"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/c72943a13ff94a3b45b2fab3eb7dd56361a349b62fe10c50ddc4b467c5a9b549/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f636f6d6d656e74732d6170702d6f75747075742d76302e676966"
              alt="gif"
            />
            <h1 className="nameProject">Comments</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://commentvlng16.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://commentvlng16.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/comments_react_16"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/a30cd3c99bbb78fb77c0e38a7f1d3061437900604428f18dfe0b27cd9f19418b/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f726576696577732d6170702d6f75747075742d76322e676966"
              alt="gif"
            />
            <h1 className="nameProject">Reviews</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://reviewvlng15.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://reviewvlng15.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/reviews_react_15"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/d820efd5957cfab2320bcb6ea64237b8bf70749f4dd44b2f1cc880288de08249/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f636f696e2d746f73732d67616d652d6f75747075742e676966"
              alt="gif"
            />
            <h1 className="nameProject">Coin Toss Game</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="	https://tossvlng14.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://tossvlng14.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/Toss_react_14"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://assets.ccbp.in/frontend/content/react-js/app-store-output.gif"
              alt="gif"
            />
            <h1 className="nameProject">App Store</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://appstorevlng13.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://appstorevlng13.ccbp.tech//</p>
              </a>
              <a
                href="https://github.com/lnguptavema/App_store_react_13"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/a51b5bf36685e3f2c9a344a900c0d99db90c2d224ac92b21b3c7d5ac2d2caf83/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f6361706974616c732d6170702d6f75747075742e676966"
              alt="gif"
            />
            <h1 className="nameProject">Capitals App</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href=" https://capitalsvlng12.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://capitalsvlng12.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/capitals_app_react_12"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/45eb42c19793551b14f42e4bc845c7358adaca19b0cda38a6d3a8598b4f55f3e/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f64657374696e6174696f6e2d7365617263682d6f75747075742d76322e676966"
              alt="gif"
            />
            <h1 className="nameProject">Destination Search </h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://searchvlng.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://searchvlng.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/Destination_search_react_7"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/41bebc7c1461b885aa8663356aacf502eeac6b9fdeca1dc1c2c8ee23076bac14/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f636173682d7769746864726177616c2d6f75747075742d76322e676966"
              alt="gif"
            />
            <h1 className="nameProject"> Cash Withdrawal </h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href=" https://decreasevlng.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://decreasevlng.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/cash_withdrawl_react_9"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://camo.githubusercontent.com/054f16ef801fb6893e76f2f5e38b1cd6345b5c43458347e1918b4a29489a97d6/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f666565646261636b2d6170702d6f75747075742d76322e676966"
              alt="gif"
            />
            <h1 className="nameProject"> Feedback App </h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://feedbackvlng11.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://feedbackvlng11.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/feedback_app_react_11"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-output.gif"
              alt="gif"
            />
            <h1 className="nameProject">Goggle suggestion</h1>
            <p className="livePara">Live Link:</p>
            <a
              href="https://suggestionsvlng.ccbp.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="linkPara">https://suggestionsvlng.ccbp.tech/</p>
            </a>
            <a
              href="https://github.com/lnguptavema/google_search_suggestions_react_10"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <h4>Github Code</h4>{' '}
            </a>
          </li>
          <li className="listContainer">
            <img
              className="listlogo"
              src="https://assets.ccbp.in/frontend/content/react-js/simple-todos-output.gif"
              alt="gif"
            />
            <h1 className="nameProject">Delete List App</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://deletelistvlng.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">https://deletelistvlng.ccbp.tech/</p>
              </a>
              <a
                href="https://github.com/lnguptavema/delete_list_react_8"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>
        </ul>
        <h1>Nodejs Projects</h1>
        <ul className="ulContainer">
          {' '}
          <li className="listContainerNode">
            <h1 className="nameProject">Twitter Clone App (backend code)</h1>
            <div>
              <a
                href="https://github.com/lnguptavema/twitterclone_node_js_1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
          <li className="listContainerNode">
            <h1 className="nameProject">Authentication (backend code)</h1>
            <div>
              <a
                href="https://github.com/lnguptavema/authentication_node_js_2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
        </ul>
        <h1>Javascript Projects</h1>
        <ul className="ulContainer">
          {' '}
          <li className="listContainerJs">
            <img
              className="listlogoJs"
              src="https://res.cloudinary.com/dqvj28bsp/image/upload/v1761476099/Screenshot_2025-10-26_162449_eexovr.png"
              alt="gif"
            />
            <h1 className="nameProject">TodoList App</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://todolistgupta.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">todolistgupta.ccbp.tech</p>
              </a>
              <a
                href="https://github.com/lnguptavema/todolist_js_1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
        </ul>
        <h1>HTML Projects</h1>
        <ul className="ulContainer">
          {' '}
          <li className="listContainerHtml">
            <img
              className="listlogoHtml"
              src="https://res.cloudinary.com/dqvj28bsp/image/upload/v1761475932/Screenshot_2025-10-26_162101_cl8jup.png"
              alt="gif"
            />
            <h1 className="nameProject">Tourism App</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://vguptatourism.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">vguptatourism.ccbp.tech</p>
              </a>
              <a
                href="https://github.com/lnguptavema/tourism_html_1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
        </ul>
        <h1>Experiment Projects</h1>
        <ul className="ulContainer">
          <li className="listContainerExp">
            <img
              className="listlogoExp"
              src="https://res.cloudinary.com/dqvj28bsp/image/upload/v1774246073/Screenshot_2026-03-23_113645_racbht.png"
              alt="gif"
            />
            <h1 className="nameProject">Quiz App</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://guptaquiz.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">guptaquiz.ccbp.tech</p>
              </a>
              <a
                href="https://github.com/lnguptavema/gupta_motivation_page"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
          <li className="listContainerExp">
            <img
              className="listlogoExp"
              src="https://res.cloudinary.com/dqvj28bsp/image/upload/v1761634157/Screenshot_2025-10-28_121848_tmatv4.png"
              alt="gif"
            />
            <h1 className="nameProject">Personal FM App</h1>
            <div>
              <p className="livePara">Live Link:</p>
              <a
                href="https://guptafm.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="linkPara">guptafm.ccbp.tech</p>
              </a>
              <a
                href="https://github.com/lnguptavema/simple_fm_react"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h4>Github Code</h4>{' '}
              </a>
            </div>
          </li>{' '}
        </ul>
        <h1>Certifications</h1>
        <ul className="ulContainer">
          <li>
            <a
              href="https://certificates.ccbp.in/academy/react-js?id=MADXCMFMOB"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <img
                className="imgCertificate"
                alt="Certificate"
                src="https://media-content.ccbp.in/certificates/share/MADXCMFMOB.png"
              />
            </a>
          </li>{' '}
          <li>
            <a
              href="https://certificates.ccbp.in/academy/programming-foundations-with-python?id=BJSOYLVKOL"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <img
                className="imgCertificate"
                alt="Certificate"
                src="https://media-content.ccbp.in/certificates/share/BJSOYLVKOL.png"
              />
            </a>
          </li>{' '}
          <li>
            <a
              href="https://certificates.ccbp.in/academy/node-js?id=GXDLOFEHVG"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <img
                className="imgCertificate"
                alt="Certificate"
                src="https://media-content.ccbp.in/certificates/share/GXDLOFEHVG.png"
              />
            </a>
          </li>{' '}
          <li>
            <a
              href="https://certificates.ccbp.in/academy/javascript-essentials?id=UJVFKUTAVV"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <img
                className="imgCertificate"
                alt="Certificate"
                src="https://media-content.ccbp.in/certificates/share/UJVFKUTAVV.png"
              />
            </a>
          </li>
          <li>
            <a
              href="https://certificates.ccbp.in/academy/introduction-to-databases?id=DMRTSJRFKU"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <img
                className="imgCertificate"
                alt="Certificate"
                src="https://media-content.ccbp.in/certificates/share/DMRTSJRFKU.png"
              />
            </a>
          </li>
          <li>
            <a
              href="https://certificates.ccbp.in/academy/dynamic-web-application?id=ELLMPDNLBF"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <img
                className="imgCertificate"
                alt="Certificate"
                src="https://media-content.ccbp.in/certificates/share/ELLMPDNLBF.png"
              />
            </a>
          </li>
          <li>
            <a
              href="https://certificates.ccbp.in/academy/developer-foundations?id=EQERITOGIH"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <img
                className="imgCertificate"
                alt="Certificate"
                src="https://media-content.ccbp.in/certificates/share/EQERITOGIH.png"
              />
            </a>
          </li>{' '}
          <li>
            <a
              href="https://certificates.ccbp.in/academy/responsive-web-design-using-flexbox?id=ZKBIAUJZRM "
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <img
                className="imgCertificate"
                alt="Certificate"
                src="https://media-content.ccbp.in/certificates/share/ZKBIAUJZRM.png"
              />
            </a>
          </li>
          <li>
            <a
              href="https://certificates.ccbp.in/academy/static-website/?id=RAUWDTHTNP"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <img
                className="imgCertificate"
                alt="Certificate"
                src="https://media-content.ccbp.in/certificates/share/RAUWDTHTNP.png"
              />
            </a>
          </li>
        </ul>
        <h1>Certifications</h1>
        <ul>
          <li>
            <a
              href="https://cdn1.ccbp.in/misc/workshop-salseforce-agentblazer-completion/LYEJYW1VHS.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="imgCertificate"
                src="https://cdn1.ccbp.in/misc/workshop-salseforce-agentblazer-completion/LYEJYW1VHS.png"
                alt="certificate"
              />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
export default Header
