import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTelegram } from './useTelegram';

const useFetchUserData = () => {
    const { user } = useTelegram();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user?.id) {
            setLoading(false);
            setError('User ID пользователя недоступен');
            return;
        }

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://95.73.132.175:2000/user`, {
                    params: { id: user.id }
                });
                setData(response.data);
            } catch (error) {
                setError(error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user?.id]);

    return { data, loading, error };
};

export default useFetchUserData;
