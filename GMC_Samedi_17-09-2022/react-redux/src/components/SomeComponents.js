import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrement, increment, signIn, signOut } from '../redux/actions'
import loggedReducer from '../redux/reducers/logged'

export default function SomeComponentsCounter() {
    const counter = useSelector(state => state.countReducer)
    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
  return (
    <div style={{padding: 20, border: "2px solid black"}}>
        <h3>im the first child component, im </h3>
        <p>counter: {counter}</p>
        <button onClick={handleIncrement}> Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}




export function SomeComponentsLogged() {
    const check = useSelector(state => state.loggedReducer)
    const dispatch = useDispatch()
    const handleSign_In = () => {
        dispatch(signIn())
    }
    const handleSign_Out = () => {
        dispatch(signOut())
    }
  return (
    <div style={{padding: 20, border: "2px solid black"}}>
        <h3>im the first child component, im </h3>
        <p>i'm logged: {check ? "yes" : "no"}</p>
        {check ?
          <div>
            <h1>hi im logged</h1>
          </div>
            :
            <></>
          
        }
        <button onClick={handleSign_In}> signIn</button>
        <button onClick={handleSign_Out}> signOut</button>
        
    </div>
  )
}