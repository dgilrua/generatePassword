import { useState } from 'react'
import './App.css'

function App() {

  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowercase] = useState(false)
  const [number, setNumber] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [longitud, setLongitud] = useState(0)
  const [generar, setGenerar] = useState(false)

  const handleGenerate = () => {
    const a = 'asdasdad'
    return a
  }

  return (
    <div className='body'>
      <div className='contenedor'>
        <p className='title'>Password Generator</p>
        <div className='password'>
          <p className='password__p '>{generar ? handleGenerate() : 'Contraseña'}</p>
          <i className="fa-regular fa-copy password__icon"></i>
        </div>
        <div className='second__container'>
          <div className='main'>
            <div className='slider'>
              <div className='slider__flex'>
                <label htmlFor="">Character Length</label>
                <p>{longitud}</p>
              </div>
              <div className='div__range'>
                <input 
                  className='range' 
                  type="range" 
                  min={0} max={30} 
                  value={longitud} 
                  onChange={e => setLongitud(e.target.valueAsNumber)} 
                />
              </div>
            </div>
            <div>
              <div className='checkbox__flex'>
                <input className='checkbox' type="checkbox" id='uppercase' checked={uppercase} onChange={() => uppercase === true ? setUppercase(false) : setUppercase(true)} />
                <label className='checkbox__label' htmlFor="uppercase">Include Uppercase Letters</label>
              </div>
              <div className='checkbox__flex'>
                <input className='checkbox' type="checkbox" id='lowercase' checked={lowercase} onChange={() => lowercase === true ? setLowercase(false) : setLowercase(true)}/>
                <label className='checkbox__label' htmlFor="lowercase">Include Lowercase Letters</label>
              </div>
              <div className='checkbox__flex'>
                <input className='checkbox' type="checkbox" id='numbers' checked={number} onChange={() => number === true ? setNumber(false) : setNumber(true)}/>
                <label className='checkbox__label' htmlFor="numbers">Include Numbers</label>
              </div>
              <div className='checkbox__flex'>
                <input className='checkbox' type="checkbox" id='symbols' checked={symbols} onChange={() => symbols === true ? setSymbols(false) : setSymbols(true)}/>
                <label className='checkbox__label' htmlFor="symbols">Include Symbols</label>
              </div>
            </div>
          </div> {/* inputs */}
          <div className='strength'>
            <p>STRENGTH</p>
            <div className='level'>
              {longitud > 0 && longitud <= 8 ? <p>LOW</p> : longitud > 8 && longitud <= 20 ? <p>MEDIUM</p> : longitud > 20 && longitud <= 30 ? <p>HIGH</p> : null}
              <div className={`levels ${ longitud > 0 ? 'color' : ''}`}></div>
              <div className={`levels ${ longitud > 8 ? 'color' : ''}`}></div>
              <div className={`levels ${ longitud > 14 ? 'color' : ''}`}></div>
              <div className={`levels ${ longitud > 20 ? 'color' : ''}`}></div>
            </div>
          </div> {/* Strength */}

          <button 
            className='generate' 
            type='button'
            onClick={() => setGenerar(true)}
          > GENERATE {'->'} </button>
        </div>
      </div>

      <style jsx={'true'}>
        {`
          .range {
            transition: background-size .15s ease;
            background-size: ${(longitud * 100)/30}%;
          }
        `}
      </style>

    </div>
  )
}

export default App
