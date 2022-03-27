import Container from "../../Shared/Container/Container"
import React from "react"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { MapContainer, TileLayer, Marker, } from 'react-leaflet'
import './ContactUs.css'

export default function ContuctUs() {
    return (
        <Container styleName="contuctUsContainer">
            <div className="contactWhitUs">
                <LocationOnOutlinedIcon /><br />
                <CallOutlinedIcon /><a href="tel:+374(44)481632">374(44)481632</a><br />
                <AlternateEmailIcon /><a href="mailto:info@aca.am">info@aca.am</a><br />
                <a href="https://www.facebook.com/armcodeacademy/" ><FacebookRoundedIcon /></a>
                <br />
                <a href="https://www.linkedin.com/company/armenian-code-academy/"><LinkedInIcon /></a><br />

                <div class="leaflet-container">
                    <MapContainer center={[40.199354645431725, 44.490718868161665]} zoom={13}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[40.199354645431725, 44.490718868161665]}>

                        </Marker>
                    </MapContainer>
                </div>




            </div>

        </Container >

    )

}





