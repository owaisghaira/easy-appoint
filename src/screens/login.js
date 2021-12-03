import React, { useState, useEffect } from 'react'
import { useLayout } from '../providers/layout-provider';
import ApplicationLayout from '../layout';
import { Input, Button,Layout } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons'
import ajaxService from '../services/ajax-service';

const { Content } = Layout;

const Login = () => {

    const [isMobileLayout] = useLayout();
    const [products, setProducts] = useState([])
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
                    <Input className='inputField' size="large" placeholder="Enter Your Email" prefix={<UserOutlined />} />
                    <Input className='inputField' size="large" placeholder="Enter Your Password" prefix={<UnlockOutlined />} />
                    <Button style={{ background: '#e6f7ff' }} block>Log In</Button>
                </div>
            </Content>
        </ApplicationLayout>
    )
}

export default Login

