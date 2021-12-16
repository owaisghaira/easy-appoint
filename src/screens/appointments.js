import React from 'react'
import { Card ,Layout} from 'antd';
import ApplicationLayout from '../layout'
import BottomNavigation from '../navigation/bottom-navbar';
const {Content} = Layout
const Appointment = () => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <Card title="Mr.Ahmed Shah" extra={<p href="#">Token:15</p>}>
                <p>Dr.Irshad Khan</p>
                <p>12:00PM to 2:00PM</p>
            </Card>
        </div>
    )
}

const Appointments = () => {
    return (
        <ApplicationLayout>
            <Content>
                <div className='p35'>
                    <h1 style={{ fontFamily: 'M PLUS Code Latin', margin: '20px', textAlign: 'center' }} >Appointments</h1>
                    {Appointment()}
                    {Appointment()}
                    <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
                        <BottomNavigation />
                    </div>
                </div>
            </Content>
        </ApplicationLayout>
    )
}

export {Appointments}
