
import type {ReactNode} from 'react'
import styles from "./AppContainer.module.css"

type AppContainerProps = {
    children: ReactNode
}

const AppContainer = ({children}: AppContainerProps) => {
  return (
    <div className={styles.container}>
        {/* <h1>Cååntainer</h1> */}
        {children}
    </div>
  )
}

export default AppContainer