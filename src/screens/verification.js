import React, { useState, useEffect } from 'react'
import { useLayout } from '../providers/layout-provider';
import ApplicationLayout from '../layout';
import { Input, Button, Layout, Typography } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons'
import ajaxService from '../services/ajax-service';
import { useHistory } from 'react-router-dom';

const { Content } = Layout;
const { Text } = Typography

const Verification = () => {

    const [isMobileLayout] = useLayout();
    const history = useHistory()
    const handleCahnge = () => {
        history.push({ pathname: '/doctors' })
    }
    useEffect(() => {

        const getHomeData = async () => {

            let response = await ajaxService.get('Brand');

            if (response != undefined && response.status === 200) {
                console.log('>>', response.data.Payload)
                // items = response.data.Payload;
                // setProduct(items);
            }
        }

        // getHomeData();

    }, []);

    return (
        <ApplicationLayout>
            <Content>
                <div className='container'>
                    <img width='80' height='90' src={'http://cdn.onlinewebfonts.com/svg/img_126975.png'} alt='logo' />
                    <h1 style={{ fontFamily: 'M PLUS Code Latin', marginBottom: '20px' }} >Easy Appointment</h1>
                    <Input className='inputField' size="large" placeholder="Enter OTP" prefix={<UserOutlined />} />
                    <Button onClick={handleCahnge} style={{ background: '#e6f7ff', marginBottom: 10 }} block>Register/Login</Button>
                </div>
            </Content>
        </ApplicationLayout>
    )
}

export default Verification
