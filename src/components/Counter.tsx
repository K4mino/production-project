import React from 'react'
import styles from './Counter.module.scss'

const Counter = () => {
    const [state, setState] = React.useState(0)

  return (
    <div>
        {state}
        <button className={styles.button} onClick={() => setState(state + 1)}>+</button>
    </div>
  )
}

export default Counter