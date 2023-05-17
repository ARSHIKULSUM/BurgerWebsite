import './navbar.css'

export default function Navbar(){

    return(
        <div className="nav">
           
           <div className='nav-elm'><a href=''>ABOUT</a></div>
            <div className='nav-elm'><a href=''>PRODUCTS</a></div>
            <div className='nav-elm' id='home'><a href=''>BURGER-BOX</a></div>
            <div className='nav-elm'><a href=''>RECIPES</a></div>
            <div className='nav-elm'><a href=''>CONTACT US</a></div>
            


        </div>
    )
}