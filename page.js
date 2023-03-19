
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Text, Stupid, Extra, FanArt, Separation } from './text/Text'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>

          Page created by &nbsp;
          <code className={styles.code}>Foxycrafter</code>
          
        </p>
        <Text className={styles.card}/>
        
        
      </div>
      <Stupid className={styles.code}/>
      <Separation/>
      
      <Extra/>
      <Separation/>
      <FanArt/>
    </main>
  )
}
