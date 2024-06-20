import { useState } from 'react'
import './App.css'

function App() {
  const [goldenValue, setGoldenValue] = useState('')
  const [violetValue, setVioletValue] = useState('')
  const [blueValue, setBlueValue] = useState('')
  const [violet1Value, setViolet1Value] = useState('')
  const [violet2Value, setViolet2Value] = useState('')
  const [gold1Value, setGolden1Value] = useState('')
  const [gold2Value, setGolden2Value] = useState('')
  const [gold3Value, setGolden3Value] = useState('')
  const [missingGold, setMissingGold] = useState(0)
  const [missingViolet, setMissingViolet] = useState(0)
  const [missingBlue, setMissingBlue] = useState(0)
  const [result, setResult] = useState('')
  const [isShowModal, setIsShowModal] = useState(false)

  const allValues =
    Number(goldenValue) +
    Number(violetValue) +
    Number(blueValue) +
    Number(violet1Value) +
    Number(violet2Value) +
    Number(gold1Value) +
    Number(gold2Value) +
    Number(gold3Value)

  const handleCalculate = () => {
    if (allValues === 0) {
      return setIsShowModal(true)
    }

    const totalViolet =
      Number(violetValue) + Number(violet1Value) * 2 + Number(violet2Value) * 4
    const totalGolden =
      Number(goldenValue) +
      Number(gold1Value) * 2 +
      Number(gold2Value) * 4 +
      Number(gold3Value) * 8 +
      Math.floor(totalViolet / 8) +
      Math.floor(Number(blueValue) / 24)

    setResult(`${Math.floor(totalGolden / 16)}`)

    const remainingGolden = totalGolden % 16

    setMissingGold(16 - remainingGolden)
    setMissingViolet(missingGold * 8)
    setMissingBlue(missingViolet * 3)
  }

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/^0+/, '')
      setter(value === '' ? '0' : value)
    }

  const handleBlur =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setter(value === '' ? '0' : value)
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
                    value={goldenValue}
                    onChange={handleInputChange(setGoldenValue)}
                    onBlur={handleBlur(setGoldenValue)}
                    placeholder="0"
                  />
                </div>
                <div className="control">
                  <label htmlFor="is-violet">Excellent</label>
                  <input
                    className="input is-violet"
                    id="is-violet"
                    min="0"
                    type="number"
                    value={violetValue}
                    onChange={handleInputChange(setVioletValue)}
                    placeholder="0"
                    onBlur={handleBlur(setVioletValue)}
                  />
                </div>
                <div className="control">
                  <label htmlFor="is-blue">Better</label>
                  <input
                    className="input is-blue"
                    id="is-blue"
                    min="0"
                    type="number"
                    value={blueValue}
                    onChange={handleInputChange(setBlueValue)}
                    placeholder="0"
                    onBlur={handleBlur(setBlueValue)}
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
                    value={gold1Value}
                    onChange={handleInputChange(setGolden1Value)}
                    placeholder="0"
                    onBlur={handleBlur(setGolden1Value)}
                  />
                </div>
                <div className="control">
                  <label htmlFor="is-violet">Excellent +1</label>
                  <input
                    className="input is-violet"
                    id="is-violet"
                    min="0"
                    type="number"
                    value={violet1Value}
                    onChange={handleInputChange(setViolet1Value)}
                    placeholder="0"
                    onBlur={handleBlur(setViolet1Value)}
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
                    value={gold2Value}
                    onChange={handleInputChange(setGolden2Value)}
                    placeholder="0"
                    onBlur={handleBlur(setGolden2Value)}
                  />
                </div>
                <div className="control">
                  <label htmlFor="is-violet">Excellent +2</label>
                  <input
                    className="input is-violet"
                    id="is-violet"
                    min="0"
                    type="number"
                    value={violet2Value}
                    onChange={handleInputChange(setViolet2Value)}
                    placeholder="0"
                    onBlur={handleBlur(setViolet2Value)}
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
                    value={gold3Value}
                    onChange={handleInputChange(setGolden3Value)}
                    placeholder="0"
                    onBlur={handleBlur(setGolden3Value)}
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

      <p className="loh">Женя лох</p>
    </>
  )
}

export default App
