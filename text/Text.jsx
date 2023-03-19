import Darcfox from "../img/DarcFoxHunter.png"
import Image from "next/image"
import styles from '../page.module.css'
import { BsDiscord } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai";
import {TbBrandTwitch} from "react-icons/tb";
import { ImagenesArt } from "./Art";
import Link from 'next/link';

export function Text(){
    return(
        <>
            
            <table>
                <tr>
                    <td><Image
            src={Darcfox}
            width={450}
            height={500}
            className = {styles.PrincipalImg}
            alt="Picture of the author"
            /></td>
            <td>
            <h1 className={styles.Text}>Hi I&apos;m Dean, well known as Darcfox93, I&apos;m a twitch streamer and a Tik-Tok content creator</h1>
        
            </td>
                </tr>
            </table>
            </>

    )
}

export function Stupid(){
    return (
        <>
        
        <p className={styles.Text}><code className={styles.code}>I usually stream : </code> 
            Vrchar, Beat Saber, Fortnite and others</p>
        </>
    )
}
export function Extra(){
    return(
        <>
            <h2 className={styles.Text}>About me</h2>
            <div className={styles.Text2}>
            <p>Im a Content Creator in twitch Youtube and some other platforms, I&apos;m allways vivin and chilling around people, i do not mind helping other small Content Creators too or makeing colabs so dont worry about aproaching to me.</p>
            <p>If annyone wanna suport me i have here linked my social medias like Twtich, Discord, Tweeter, Tik-Tok and Paypal</p>
            </div>
            <Socialmedia/>
            
            
        </>
    )
}

export function Separation(){
    return(
        <>
            <h1 className={styles.Separation}>--------------------------------------------------------------------------------</h1>
        </>
    )
}

export function Socialmedia(){
    return(
        <>
        <table>
                <tr className={styles.Brand}>
                    <tb className={styles.Brand}><Link href={"https://discord.gg/xUD9p6vr"}   ><BsDiscord/></Link></tb>
                    <tb className={styles.Brand}> <Link href={"https://twitter.com/Pikachufan1993"}   ><AiFillTwitterCircle/></Link></tb>
                    <tb className={styles.Brand}><Link href={"https://www.instagram.com/darcfox93/?hl=es-la"}   ><AiFillInstagram/></Link></tb>
                    <tb className={styles.Brand}><Link href={"https://www.twitch.tv/darcfox93"}   ><TbBrandTwitch/></Link></tb>
                </tr>
            </table>
            </>
    )
}
export function FanArt(){
    return(
        <>
            <h1>Fan Art and Commisions</h1>
            <ImagenesArt/>
            
        </>
    )
}

