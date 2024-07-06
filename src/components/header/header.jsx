import React from "react";
import { useTelegram } from "../../hooks/useTelegram";
import useFetchUserData from '../../hooks/useApi'; 
import './header.css';

const Header = () => {

    const {user, onClose} = useTelegram();
    const { data, loading, error } = useFetchUserData();

    return (
        <div className="header">
            <div className="header-content">

                <div className="profile">

                    <div className="profile-info">
                        <div className="profile-name">{user?.first_name} {user?.last_name}</div>
                        <div className="profile-id">ID: {user?.id}</div>
                    </div>
                </div>

                <div className="balance">
                    <span className="balance-text">БАЛАНС</span>
                    <span className="balance-amount">Р</span>
                </div>

                <button className="recharge-button">ПОПОЛНИТЬ</button>
            </div>
            <span>{loading ? 'Loading...' : error ? 'Error' : `${data?.balance} Р`}</span>
        </div>
    );
};

export default Header;