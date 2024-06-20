import { useState } from 'react'
import './App.css'

function App() {
  const [goldenValue, setGoldenValue] = useState(0)
  const [violetValue, setVioletValue] = useState(0)
  const [blueValue, setBlueValue] = useState(0)
  const [violet1Value, setViolet1Value] = useState(0)
  const [violet2Value, setViolet2Value] = useState(0)
  const [gold1Value, setGolden1Value] = useState(0)
  const [gold2Value, setGolden2Value] = useState(0)
  const [gold3Value, setGolden3Value] = useState(0)
  const [missingGold, setMissingGold] = useState(0)
  const [missingViolet, setMissingViolet] = useState(0)
  const [missingBlue, setMissingBlue] = useState(0)
  const [result, setResult] = useState(0)
  const [isShowModal, setIsShowModal] = useState(false)

  const allValues =
    goldenValue +
    violetValue +
    blueValue +
    violet1Value +
    violet2Value +
    gold1Value +
    gold2Value +
    gold3Value

  const handleCalculate = () => {
    if (allValues === 0) {
      return setIsShowModal(true)
    }

    const totalViolet = violetValue + violet1Value * 2 + violet2Value * 4
    const totalGolden =
      goldenValue +
      gold1Value * 2 +
      gold2Value * 4 +
      gold3Value * 8 +
      Math.floor(totalViolet / 8) +
      Math.floor(blueValue / 24)

    setResult(Math.floor(totalGolden / 16))

    const remainingGolden = totalGolden % 16

    setMissingGold(16 - remainingGolden)
    setMissingViolet(missingGold * 8)
    setMissingBlue(missingViolet * 3)
  }

  return (
    <>
      <div className="container">
        <div className="calculatorForm box">
          <div className="wrapper">
            <div className="wrapper__inputs">
              <div className="wrapper__input">
                <div className="control">
                  <label htmlFor="is-yellow">Epic</label>
                  <input
                    className="input is-yellow"
                    id="is-yellow"
                    min="0"
                    type="number"
                    placeholder="Link input"
                    value={goldenValue}
                    onChange={e => setGoldenValue(+e.target.value)}
                  />
                </div>
                <div className="control">
                  <label htmlFor="is-violet">Excellent</label>
                  <input
                    className="input is-violet"
                    id="is-violet"
                    min="0"
                    type="number"
                    placeholder="Link input"
                    value={violetValue}
                    onChange={e => setVioletValue(+e.target.value)}
                  />
                </div>
                <div className="control">
                  <label htmlFor="is-blue">Better</label>
                  <input
                    className="input is-blue"
                    id="is-blue"
                    min="0"
                    type="number"
                    placeholder="Link input"
                    value={blueValue}
                    onChange={e => setBlueValue(+e.target.value)}
                  />
                </div>
              </div>
              <div className="wrapper__input">
                <div className="control">
                  <label htmlFor="is-yellow">Epic +1</label>
                  <input
                    className="input is-yellow"
                    id="is-yellow"
                    min="0"
                    type="number"
                    placeholder="Link input"
                    value={gold1Value}
                    onChange={e => setGolden1Value(+e.target.value)}
                  />
                </div>
                <div className="control">
                  <label htmlFor="is-violet">Excellent +1</label>
                  <input
                    className="input is-violet"
                    id="is-violet"
                    min="0"
                    type="number"
                    placeholder="Link input"
                    value={violet1Value}
                    onChange={e => setViolet1Value(+e.target.value)}
                  />
                </div>
              </div>
              <div className="wrapper__input">
                <div className="control">
                  <label htmlFor="is-yellow">Epic +2</label>
                  <input
                    className="input is-yellow"
                    id="is-yellow"
                    min="0"
                    type="number"
                    placeholder="Link input"
                    value={gold2Value}
                    onChange={e => setGolden2Value(+e.target.value)}
                  />
                </div>
                <div className="control">
                  <label htmlFor="is-violet">Excellent +2</label>
                  <input
                    className="input is-violet"
                    id="is-violet"
                    min="0"
                    type="number"
                    placeholder="Link input"
                    value={violet2Value}
                    onChange={e => setViolet2Value(+e.target.value)}
                  />
                </div>
              </div>
              <div className="wrapper__input">
                <div className="control">
                  <label htmlFor="is-yellow">Epic +3</label>
                  <input
                    className="input is-yellow"
                    id="is-yellow"
                    min="0"
                    type="number"
                    placeholder="Link input"
                    value={gold3Value}
                    onChange={e => setGolden3Value(+e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="button" type="submit" onClick={handleCalculate}>
              Calculate
            </button>
            <input
              className="input result"
              type="text"
              placeholder="Result"
              value={result}
              readOnly
            />
          </div>
          <div className="wrapper__missing">
            <h3 className="wrapper__missing--epic">
              Missing Epic: {missingGold}
            </h3>
            <h3 className="wrapper__missing--excellent">
              or Missing Excellent: {missingViolet}
            </h3>

            <h3 className="wrapper__missing--better">
              or Missing Better: {missingBlue}
            </h3>
          </div>
        </div>
        {isShowModal && (
          <div className="ModalContainer">
            <div className="ModalWindow">
              <p className="ModalWindow--text">Fill in at least one field!</p>
              <button
                className="ModalWindow--button"
                onClick={() => setIsShowModal(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App
