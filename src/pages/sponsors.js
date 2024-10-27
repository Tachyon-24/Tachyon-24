import "./sponsors.css";
import CardHeaderSponsor from "./sponsorpagecomponent/cardHeaderSponsor";
import Footer from "../components/Footer";
import SponsorSection from "./sponsorpagecomponent/sponsorsection";

const sponsorspage = () => {
    return (
        <>
            <CardHeaderSponsor />
            <SponsorSection />
            <Footer />
        </>
    )
}


export default sponsorspage;