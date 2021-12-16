import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { HomeOutlined, ShopOutlined, ShoppingCartOutlined, HistoryOutlined } from '@ant-design/icons';
import { CartModal } from '../components';

export default function BottomNavigationBar() {
    const [value, setValue] = useState('recents');
    const [isModalVisible, setIsModalVisible] = useState(false);
    let history = useHistory();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div className=''>
            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction
                    value="All"
                    icon='All'
                    onClick={() => history.push({ pathname: '/appointments' })}

                />
                <BottomNavigationAction
                    value="Current"
                    icon='Current'
                    onClick={() => history.push({ pathname: '/appointments' })}

                />
                <BottomNavigationAction
                    value="Proceed"
                    icon='Proceed'
                    onClick={() => history.push({ pathname: '/processing' })}

                />

            </BottomNavigation>
            <CartModal displayModal={isModalVisible} toggleModal={setIsModalVisible} />
        </div>
    );
}
