import styles from './contact.module.css';

export default function Contact(){
    return(
        <section className={styles.outer}>
            <h1 className={styles.heading}>Call the chef at your confort zone!</h1>
         <form>

            <div className={styles.input}>
                 <label htmlFor="name">Name</label>
                 <input className={styles.field}
                   type="text"
                   id="name"
                 />
           </div > 
           <div className={styles.input}>
                   <label htmlFor="email">Email</label>
                   <input  className={styles.field}
                     type="email"
                     id="email"
                     />
           </div> 
           <div className={styles.input}>
                    <label htmlFor="phone">Phone</label>
                    <input  className={styles.field}
                      type="tel"
                      id="phone"

                       />
            </div> 
            <div className={styles.input}>
                    <label htmlFor="message">Message</label>
                    <textarea  className={styles.field}
                      id="message"
                      rows="5"
                      cols="50"
                    />
      </div>
                    <button type="submit">Submit</button>         

      
         </form>
        </section>
    )
}