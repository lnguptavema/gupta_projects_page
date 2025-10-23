import './index.css'

const Header = () => (
  <div className="mainContainer">
    <h1 className="name">Gupta Projects</h1>
    <h1>HTML Projects</h1>
    <h1>ReactJS Projects</h1> 
    <ul className="ulContainer">
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
          <p className="linkPara">https://suggestionsvlng.ccbp.tech/</p>       {' '}
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
        </div>
      </li>
    </ul>
  </div>
)

export default Header
