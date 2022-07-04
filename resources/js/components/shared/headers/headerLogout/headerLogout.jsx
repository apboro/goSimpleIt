import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Typography from "@mui/material/Typography";
import GoMenu from "./goMenu/goMenu";
import style from './headerLogout.module.css'
const HeaderLogout = (title) => {
    return (
        <header className="header">
            <div className="container">
                <div className={`${style.headerWapper}`}>
                    <div className={`${style.headerLogo}`}>
                        <Link href="/">
                            <img src="/images/logo-upwork.svg" alt="Logo"></img>
                        </Link>
                    </div>
                    <Typography variant="overline" sx={{ fontSize: 25 }}>
                        {title.title}
                    </Typography>

                    <a href={route('chatify')}>Messenger</a>

                    <GoMenu />
                </div>
            </div>
        </header>
    );
};
export default HeaderLogout;
