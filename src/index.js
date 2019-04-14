import React, {useState} from 'react'
import ReactDOM from 'react-dom'

// Tapahtumankäsittely
// käyttäjän interaktio sivun elementtien kanssa aiheuttaa joukon erinäisiä tapahtumia

/*const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}*/

//Yksikertaisemmin destrukturoimalla propsi(t):
/*const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}*/

//Ja vielä tiiviimmin, koska sisältää vain returnin:
const Display = ({counter}) => <div>{counter}</div>

//Tehdään seuraavaksi napeille tarkoitettu komponentti Button. 
//Napille on välitettävä propsien avulla tapahtumankäsittelijä sekä napin teksti:
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

// laskurin kasvaminen tapahtuu käyttäjän painaessa button-elementin avulla toteutettua nappia
const App = (props) => {
    const [counter, setCounter] = useState(0)
    const setToValue = (value) => () => setCounter(value)

    return (
      <div>
        <Display counter={counter}/>
        <Button handleClick={setToValue(counter + 1)} text='plus'/>
        <Button handleClick={setToValue(counter - 1)} text='minus'/>
        <Button handleClick={setToValue(0)} text='zero'/>
      </div>
    )
    //Vanha button, ilman Button komponenttia
    /*  <button onClick={setToValue(counter + 1)}>
          plus
        </button>
        <button onClick={setToValue(0)}>
          zero
        </button>*/
}

ReactDOM.render(<App />, document.getElementById('root'))
