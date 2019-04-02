import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} {props.value}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by
      <a href="https://github.com/vayrtom">vayrtom</a>
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Arto" age={26 + 10}/>
      <Hello name={nimi} age={ika} value={1+2}/>
      <Hello />
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
