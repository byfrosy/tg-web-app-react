import React from "react";
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {

    const {user, onClose} = useTelegram();

    return (
        <div className="header">
            by.frosy.production
            <sapn className={'username'}>  
                {user?.first_name} {user?.last_name}
            </sapn>
            <sapn className={'id'}>  
                {user?.id}
            </sapn>
        </div>
    );
};

export default Header;