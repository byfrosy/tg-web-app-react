import React from "react";
import { useTelegram } from "../../hooks/useTelegram";
import './header.css';

const Header = () => {

    const {user, onClose} = useTelegram();


    return (
        <div className="header">
            <div className="header-content">

                <div className="profile">

                    {/* <img src={user?.photo_url} alt="User Photo" /> */}

                    <div className="profile-info">
                        <div className="profile-name">{user?.first_name} {user?.last_name}</div>
                        <div className="profile-id">ID: {user?.id}</div>
                    </div>
                </div>

                <div className="balance">
                    <span className="balance-text">БАЛАНС</span>
                    <span className="balance-amount">99 999 Р</span>
                </div>

                <button className="recharge-button">ПОПОЛНИТЬ</button>
            </div>
        </div>
    );
};

export default Header;