import React, {useState} from 'react'
import ReactDOM from 'react-dom'

// Tapahtumankäsittely
// käyttäjän interaktio sivun elementtien kanssa aiheuttaa joukon erinäisiä tapahtumia

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born {bornYear()}
      </p>    
    </div>
  )
}

// laskurin kasvaminen tapahtuukin käyttäjän painaessa button-elementin avulla toteutettua nappia
const App = (props) => {
    const [counter, setCounter] = useState(0)
    const nimi = 'Pekka'
    const ika = 10
  
    //const handleClick = () => {
    //Tapa 1:
    /*const increaseByOne = () => {
      console.log('klicked')
      setCounter(counter + 1)
    }
    const setToZero = () => setCounter(0)
    Kutsut:
        <button onClick={increaseByOne}> plus </button>
        <button onClick={setToZero}> zero </button>
    */
    /*
    //Tapa 2:
    //Geneerisempi funktio
    const setToValue = (value) => setCounter(value)
    Kutsut:
        <button onClick={() => setToValue(counter+1)}> plus </button>
        <button onClick={() => setToValue(0)}> zero </button>
    */

    //Tapa 3: Javascriptin ja yleisemminkin funktionaalisen ohjelmoinnin kikka, eli määritellään funktio joka palauttaa funktion
    //ei ehkä järkevä tähän sovellukseen
    const setToValue = (value) => {
      return () => {
        setCounter(value)
      }
    }
    //Tiivimpi muoto: const setToValue = (value) => () => setCounter(value)

    return (
      <div>
        <div>{counter}</div>
        <button onClick={setToValue(counter+1)}> plus </button>
        <button onClick={setToValue(0)}> zero </button>

        <Hello name="Arto" age={26 + 10}/>
        <Hello name={nimi} age={ika} value={1+2}/>  
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
