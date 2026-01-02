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
        <h1 className="frontend">Frontend Projects</h1>
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
              src="https://camo.githubusercontent.com/efebbb23f52eeb9b854c716e20c2976911d0b74f8a5f8ec8426ce14a5b63bf4f/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f63727970746f63757272656e63792d747261636b65722d6f75747075742e676966"
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
              src="https://camo.githubusercontent.com/55a9adcce40c937e0965e8b4fc0ffd93cb359b2f623f352ea299822786ce8fe0/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f69706c2d64617368626f6172642d6f75747075742d76322e676966"
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
                href="https://github.com/lnguptavema/cryptocurrency_react_28"
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
              src="https://camo.githubusercontent.com/865a44c5aebae94eb9710850b5159889316bd1e3477dac1cd6d19f08737761d1/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f66657463682d616e642d726f7574696e672d70726163746963652d6f75747075742e676966"
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
              src="https://camo.githubusercontent.com/b8cf32d43acfc6901bb7d04ea1c709b58cf3352e2e67e01e9aaa16b12573f5cd/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f666171732d6f75747075742d76332e676966"
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
              src="https://camo.githubusercontent.com/63e4c5093a0fc73f3c2a884c244191b26173c5c555f8bba8398a2cd811117e7e/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f706173736f7772642d6d616e616765722d6f75747075742d76302e676966"
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
              src="https://camo.githubusercontent.com/dbe00f791706ab6bec4563338b85fde9667677f3bf12238aabd028685246c8cd/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f73746f7077617463682d6f75747075742d76322e676966"
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
              src="https://camo.githubusercontent.com/e6bf16a4afd7053a40b461f0206a2205275183628215036874960dc59ec5aff7/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f656d6f6a692d67616d652d6f75747075742d76322e676966"
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
              src="https://camo.githubusercontent.com/0c2939f5b9c53abb2c1a1e71fa743b7a9888fcab4332ef058e427b66f63d268f/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f6469676974616c2d74696d65722d6f75747075742e676966"
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
              src="https://camo.githubusercontent.com/7253156610c80414823ab81f96b4102f3b02de52c0e069158b9e745aee9a05e3/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f6d6f6e65792d6d616e616765722d6f75747075742e676966"
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
              src="https://camo.githubusercontent.com/55e545f64ab676c71faf9e03a3692d29c13d0e9c466f8d6a07d1c4f1a4eba83a/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f6170706f696e746d656e74732d6170702d6f75747075742e676966"
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
              src="https://camo.githubusercontent.com/99ce7923b4bfe921ad97edfc89c1393793c3f0205cf7afd1c563059603be914e/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f636f6d6d656e74732d6170702d6f75747075742d76302e676966"
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
              src="https://camo.githubusercontent.com/bb43b03e1463e322e84be58b3a9b1b3987985c05693223d0070904daeb3546d9/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f726576696577732d6170702d6f75747075742d76322e676966"
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
              src="https://camo.githubusercontent.com/737cacba48e1d05483b9354e7e3de27ede7b8c07eb0c43b0ba9ce3d988dc65ba/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f636f696e2d746f73732d67616d652d6f75747075742e676966"
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
              src="https://camo.githubusercontent.com/85267c6447bf8533c81ca7c109f811005f79f1ec5ac5db2e8a99b5e45ab8d4cf/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f6361706974616c732d6170702d6f75747075742e676966"
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
              src="https://camo.githubusercontent.com/42392d53d576348f8c3890ff8de10d11ab2cf842c52a29e386ee340fbb0dfa0b/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f64657374696e6174696f6e2d7365617263682d6f75747075742d76322e676966"
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
              src="https://camo.githubusercontent.com/f91ef3273f042115348db5e3500451e0237bbf2231acaa92afbee90219051044/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f636173682d7769746864726177616c2d6f75747075742d76322e676966"
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
              src="https://camo.githubusercontent.com/d64f4efbb0aab4ef8f95e26375625d764f2d006607c4a97205b0161c6009b12d/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f666565646261636b2d6170702d6f75747075742d76322e676966"
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
          {' '}
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
      </div>
    )
  }
}
export default Header
