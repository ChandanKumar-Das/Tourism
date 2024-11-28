import { Adventure } from "../components/Adventure";
import { Banner } from "../components/Banner";
import { Blogs } from "../components/Blogs";
import { Discover } from "../components/Discover";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Guide } from "../components/Guide";
import { MoreFeatures } from "../components/MoreFeatures";
import { Navbar } from "../components/Navbar";
import { Reviews } from "../components/Reviews";
import { Safari } from "../components/Safari";
import { Video } from "../components/Video";
import { WhyChooseUs } from "../components/WhyChoosUs";
import { Youtube } from "../components/Youtube";


export function Index (){
    return(
        <>
        <div className="w-full">
        <Navbar/>
        <Banner/>
        <Guide/>
        <Discover/>
        <Adventure/>
        <Safari/>
        <WhyChooseUs/>
        <Experience/>
        <Video/>
        <MoreFeatures/>
        <Blogs/>
        <Youtube/>
        {/* <Reviews/> */}
        {/* <Footer/> */}
        </div>
        </>
    )
}

