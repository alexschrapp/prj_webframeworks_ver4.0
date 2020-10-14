import React from 'react'
import styles from './Menu.module.css'

export default function Menu(props) {
    return (
        <div className= { styles.headerBackground }>
            <div className={styles.container}>
                <div className={styles.brand } >
                    ChargingPoint
                </div>
                <div className={styles.subCat }to='/'>
                    <div>Sign me up</div>
                </div>
                <div isAuthenticated={props.isAuthenticated} path="/" render={(props)=>
                    <div className={styles.subCat } to='/charge'>
                        <div>Select charger</div>
                    </div>}>
                </div>
                <div isAuthenticated={props.isAuthenticated} path="/" render={(props)=>
                    <div  className={styles.subCat } to='/history'>
                        <div>Charging History</div>
                    </div>}>
                </div>
                <div className={styles.subCat } to='/signup'>
                    <div>Map/Kortti</div>
                </div>
                <input className={styles.searchbar } type="text" placeholder="Search for chargers" onChange={ (event)=> props.onChange(event)}></input>
                <input className={styles.login } type="text" placeholder="Username" onChange={(event)=> props.usernameChange(event)}></input>
                <input type="password" placeholder="Password" onChange={ (event)=> props.passwordChange(event)}></input>
                <button className={styles.login } onClick={()=>props.userLogin(props.currentUser)}>
                    Login
                </button> 
            </div>
        </div>
        
    )
}