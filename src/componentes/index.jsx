import React from "react"
import { useState } from "react"
import styles from "./index.module.scss"

import logoIMG from "../img/logo.jpg"
import qrIMG from "../img/qr.jpg"

import whatsapp from "../img/svg/whatsapp.png"
import instagram from "../img/svg/instagram.png"
import facebook from "../img/svg/facebook.png"
import local from "../img/svg/local.png"

export default() => {
    
    const [avatar, setAvatar] = useState(true)

    function alteraAvatar(){
        setAvatar(!avatar)
    }

    return(
        <>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <div className={styles.avatarContainer}>
                        <div className={styles.avatar}>
                            <div className={styles.img_box}>
                                <img  src={qrIMG} onClick={alteraAvatar} alt="qr code" />
                            </div>
                            <div className={styles.img_box}>
                                <img className={`${styles.logo} ${avatar ? '' : styles.hidden}`} src={logoIMG} onClick={alteraAvatar} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.infosBG}>
                    <div className={styles.infos}>
                        <div className={styles.titles}>
                            <h1 className={styles.title}>KADILO E MICHELE</h1>
                            <h2 className={styles.subtitle}>Mais de 25 anos de experiência</h2>
                        </div>
                        <div className={styles.icons}>
                            <a target="_blank" href="https://wa.me/49999559282?text=Olá,%20Michele,%20gostaria%20de%20marcar%20um%20horário%20contigo!" className={styles.icon_box}>
                                <img className={styles.icon} src={whatsapp} alt="whatsapp" />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/kadiloemichele/" className={styles.icon_box}>
                                <img className={styles.icon} src={instagram} alt="instagram" />
                            </a>
                            <a target="_blank" href="https://www.facebook.com/KadiloeMichele" className={styles.icon_box}>
                                <img className={styles.icon} src={facebook} alt="facebook" />
                            </a>
                            <a target="_blank" href="https://maps.app.goo.gl/7DHE6nWxjDp9UhZo6" className={styles.icon_box}>
                                <img className={styles.icon} src={local} alt="local" />
                            </a>
                        </div>
                        <p className={styles.text}>Venha realizar seu sonho com <br /> quem entende de cabelos!</p>
                    </div>
                </div>
            </div>
        </>
    )
}