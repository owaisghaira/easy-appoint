import React, { useState, useEffect } from 'react'
import { useLayout } from '../providers/layout-provider';
import ApplicationLayout from '../layout';
import { Input, Button, Layout,Typography } from 'antd';
import { PhoneOutlined} from '@ant-design/icons'
import ajaxService from '../services/ajax-service';
import { useHistory } from 'react-router-dom';

const { Content } = Layout;
const { Text} = Typography

const Login = () => {

    const [isMobileLayout] = useLayout();
    const history = useHistory()
    const handleCahnge = () => {
        history.push({pathname:'/verification'})
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
                    <Input className='inputField' size="large" placeholder="Enter Your Phone No." prefix={<PhoneOutlined />} />
                    <Button onClick={handleCahnge} style={{ background: '#e6f7ff', marginBottom:10}} block>Verify</Button>
                    {/* <Text>Don't Have An Account? SignUp Here</Text> */}
                </div>
            </Content>
        </ApplicationLayout>
    )
}

export default Login

