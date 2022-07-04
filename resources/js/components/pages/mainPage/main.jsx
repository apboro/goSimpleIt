import React, { useRef } from "react";
import MakeOrder from "./makeOrder/makeOrder";
import { myJson } from "../../../mocks/review-data";
import Talks from "./talks/talks";
import Projects from "./projects/projects";
import AboutUs from "./aboutUs/aboutUs";
import MainHeader from "./mainHeader/mainHeader";
import Footer from "@/components/shared/footer/footer";
import ActiveTasks from "@/components/shared/activeTasks/activeTasks";
import Freelancers from "./freelancers/freelancers";
import MainStart from "./mainStart/mainStart";
import SectionContainer from "@/components/shared/sectionContainer/sectionContainer"
import style from "./main.module.css";

const Main = (props) => {
    const makeOrder = useRef(null);
    const scroll = () => makeOrder.current.scrollIntoView();

    return (
        <>
        <SectionContainer classes={`${style.headerContainer}`} classesCont={`${style.bgrImg}`}>
        <MainHeader
                        role={props.auth.user && props.auth.user.role}
                    />

                    <MainStart scroll={scroll} />
        </SectionContainer>

            <ActiveTasks count={6} />

            <Projects portfolioList={myJson.portfolio} />

            <Freelancers reviewsList={myJson.reviews} count={3} />

            <Talks reviewsList={myJson.reviews} count={3} />
            <SectionContainer>
            <div
                ref={makeOrder}
                user={props.auth.user}
                className={`${style.blockContainer}`}
            >
                <AboutUs />
                <MakeOrder />
            </div>
            </SectionContainer>


            <Footer />
        </>
    );
};
export default Main;
