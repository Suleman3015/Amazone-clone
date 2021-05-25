import React from "react"
import "./home.css"
import Product from './product'
function Home() {
    return (
        <div className="Home">
            <div className="home-container" >
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV1._CB412009348_.jpg" className="home-img" />
                <div className="home-row">
                    <Product id='12434567' title="Simple Mobile SAMSUNG Galaxy S10 Lite 4G LTE Prepaid Smartphone (Locked) - Black - 128GB - Sim Card Included - GSM (SMSAG770U1GP5)" image="https://images-na.ssl-images-amazon.com/images/I/61Z6Lm7fviL._AC_SL1500_.jpg" price={200} rating={3} />
                    <Product id='146742' title="SAMSUNG 32-Inch Odyssey G5 Gaming Monitor with 1000R Curved Screen, 144Hz, 1ms, FreeSync Premium, QHD (LC32G55TQWNXZA), Black" image="https://images-na.ssl-images-amazon.com/images/I/61Lb5JbFxML._AC_SL1000_.jpg" price={200} rating={3} />
                    <Product id='24124' title="SAMSUNG 32-Inch Odyssey G5 Gaming Monitor with 1000R Curved Screen, 144Hz, 1ms, FreeSync Premium, QHD (LC32G55TQWNXZA), Black" image="https://images-na.ssl-images-amazon.com/images/I/81MjVRyzEIL._AC_SL1500_.jpg" price={500} rating={2} />


                </div>

                <div className="home-row">
                    <Product id='8687' title="SAMSUNG 32-Inch Odyssey G5 Gaming Monitor with 1000R Curved Screen, 144Hz, 1ms, FreeSync Premium, QHD (LC32G55TQWNXZA), Black" image="https://images-na.ssl-images-amazon.com/images/I/61o7ai%2BYDoL._SL1441_.jpg" price={540} rating={3} />
                    <Product id='656454' title="OnePlus 8 Glacial Green,​ 5G Unlocked Android Smartphone U.S Version, 8GB RAM+128GB Storage, 90Hz Fluid Display,Triple Camera, with Alexa Built-in," image="https://images-na.ssl-images-amazon.com/images/I/51uEwkqjZTL._AC_SL1040_.jpg" price={650} rating={4} />
                </div>

                <div className="home-row">
                    <Product id='116765' title="SAMSUNG 32-Inch Odyssey G5 Gaming Monitor with 1000R Curved Screen, 144Hz, 1ms, FreeSync Premium, QHD (LC32G55TQWNXZA), Black" image="https://images-na.ssl-images-amazon.com/images/I/91GNONZ1fCL._AC_SL1500_.jpg" price={650} rating={5} />
                </div>


            </div>
        </div>

    )
}

export default Home