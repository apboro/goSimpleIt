import GoMenu from "@/components/shared/header/goMenu/goMenu";
import {Link, Head} from "@inertiajs/inertia-react";
import style from "./header.module.css";
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: 'GTM-5WB9PLH'
}
TagManager.initialize(tagManagerArgs)

const Header = ({styleBtn}) => {
    return (
        <>
            <Head>
                <title>Freelance Service</title>
                <meta name = "description" content="Find freelancer"/>
            </Head>
            <header className={`${style.header}`}>
                <div>
                    <Link href="/" className={`${style.headerLogo}`}>
                        <img src="/images/logo-upwork.svg" alt="Logo"></img>
                    </Link>
                </div>

                <GoMenu styleBtn={styleBtn}/>
            </header>
        </>
);
};
export default Header;
