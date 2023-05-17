import styles from './home.module.css'

export default function Home(){
    return(
        <div className={styles.outerAbout}>
           <img src='https://eat-curious.com/wp-content/uploads/2022/12/home-3.svg'/>
           <div className={styles.text}>
            <h1>Burgers out of the Box</h1>
            <p>It’s what inspires us to whip up, throw together, tear, shake, and break the rules – on a mission to redefine food for a new generation.</p>
           </div>
        </div>
    )
}