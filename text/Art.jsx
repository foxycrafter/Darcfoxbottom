import Imagenes0011 from "../img/IMG_0011.jpg"
import Imagenes2073 from "../img/IMG_2073.png"
import Imagenes2347 from "../img/IMG_2347.jpg"
import Imagenes2348 from "../img/IMG_2348.jpg"
import Imagenes2349 from "../img/IMG_2349.jpg"
import Imagenes2805 from "../img/IMG_2805.jpg"
import Imagenes2803 from "../img/IMG_2803.jpg"
import ImagenesH from "../img/DarcFoxHunter.png"

import ImagenesHs from "../img/DarcFoxHunterShiny.png"
import styles from '../page.module.css'
import Image from "next/image"



//jokes

import Imagenes202 from "../img/IMG_202.jpg"
import Imagenescursed from "../img/icurseu.jpg"


export function ImagenesArt(){
    return(
        <>
        <table>
            <tr className={styles.grid}>
                <td>
                    
                  <Image src={Imagenes0011} withd={200} height={200} alt="Refsheet" />
                </td>
            
                <td>
                    
                    <Image src={Imagenes2073} withd={200} height={200} alt="Refsheet" />
                </td>
            
                <td>
                    
                    <Image src={Imagenes2347} withd={200} height={200} alt="Refsheet" />
                </td>
                <td>
                    <Image src={Imagenes2348} withd={200} height={200} alt="Refsheet" />
                </td>
                <td>
                    <Image src={Imagenes2349} withd={200} height={200} alt="Refsheet" />
                </td>
                <td>
                    <Image src={Imagenes2805} withd={200} height={200} alt="Refsheet" />
                </td>
                <td>
                    <Image src={Imagenes2803} withd={200} height={200} alt="Refsheet" />
                </td>
            
                <td>
                    
                    <Image src={ImagenesH} withd={200} height={200} alt="Refsheet" />
                </td>
                <td>
                    <Image src={ImagenesHs} withd={200} height={200} alt="Refsheet" />
                </td>
            </tr>
        </table>
        </>
    )
}