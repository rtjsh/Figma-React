import styles from './Navigation.module.css'

const Navigation=()=>{

    console.log(styles);
    
    return(
       <nav className={styles.navigation}>
        {/* <nav className="container"> */}
        <div className="logo">
            <img src="/images/Frame 2 1.png" alt="" />
        </div>
        <ul>
            <li href="#">Home</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>

       </nav> 
    )
}

export default Navigation




