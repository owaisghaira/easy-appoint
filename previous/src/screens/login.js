import React from 'react'
import { Input, Button } from 'antd';
import Logo from '../images/appointment-icon.png'
import { UserOutlined, UnlockOutlined } from '@ant-design/icons'
const Login = () => {
    return (
        <div className='container'>
            <img width='80' src={Logo} alt='logo' />
            <h1 style={{ fontFamily: 'M PLUS Code Latin', marginBottom: '20px' }} >Easy Appointment</h1>
            <Input className='inputField' size="large" placeholder="Enter Your Email" prefix={<UserOutlined />} />
            <Input className='inputField' size="large" placeholder="Enter Your Password" prefix={<UnlockOutlined />} />
            <Button style={{ background: '#e6f7ff' }} block>Log In</Button>
        </div>
    )
}

export default Login
