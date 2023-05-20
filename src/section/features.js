import style from './features.module.css'

export default function Features(){
    return(
        <section className={style.outer}>
         <h1>Features-&-Benefits</h1>
         <article className={style.container}>
            <div className={style.box}>
                 <img src='https://eat-curious.com/wp-content/uploads/2022/12/home-9.png'/>
                 <h3>PLANT BASED RECIEPE</h3>
            </div>
            <div className={style.box}>
                 <img src='https://eat-curious.com/wp-content/uploads/2022/12/home-11.png'/>
                 <h3>SKILLED CHEFS</h3>
            </div>
            <div className={style.box}>
                 <img src='https://eat-curious.com/wp-content/uploads/2022/12/home-12.png'/>
                 <h3>CLEAN WORK</h3>
            </div>
            <div className={style.box}>
                 <img src='https://eat-curious.com/wp-content/uploads/2022/12/home-10.png'/>
                 <h3>YUMM FOOD</h3>
            </div>
         </article>
        </section>
    )
}