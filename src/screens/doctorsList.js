import React from 'react'
import ApplicationLayout from '../layout';
import { useHistory } from 'react-router-dom';
import { Card, Button, Layout } from 'antd';
const { Content } = Layout
const DoctorsList = () => {
    const history = useHistory()
    return (
        <ApplicationLayout>
            <Content>
                <div>
                    <h1 style={{ fontFamily: 'M PLUS Code Latin', margin: '20px', textAlign: 'center' }} >Doctors </h1>
                    <div className='p35'>
                        <Card title="Dr.Irshad Khan" extra={<p href="#">Detail</p>}>
                            <p>DOW Hospital</p>
                            <p>12:00PM to 2:00PM</p>
                        </Card>
                        <Button onClick={()=>history.push({pathname:'/appointments'})} style={{ marginTop: '20px', background: '#e6f7ff' }} block>Start OPD</Button>
                    </div>
                </div>
            </Content>
        </ApplicationLayout>
    )
}

export default DoctorsList
