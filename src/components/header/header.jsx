import React from "react";
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {

    const {user, onClose} = useTelegram();

    return (
        <div className="header">
            <sapn className={'username'}>
                {user?.username}
            </sapn>
        </div>
    );
};

export default Header;