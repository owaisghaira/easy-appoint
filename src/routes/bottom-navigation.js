import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { LogoutOutlined , CheckOutlined ,LoginOutlined  } from '@ant-design/icons';

export default function LabelBottomNavigation() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="Appointments"
                value="Appointments"
                icon={<CheckOutlined />}
                // onClick={() => history.push(nav.routeName)
            />
            <BottomNavigationAction
                label="Current"
                value="Current"
                icon={<LoginOutlined />}
            />
            <BottomNavigationAction
                label="Process"
                value="Process"
                icon={<LogoutOutlined />}
            />
        </BottomNavigation>
    );
}
