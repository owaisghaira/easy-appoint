import React from 'react'
import { Card } from 'antd';
import LabelBottomNavigation from '../routes/bottom-navigation';

const Appointment = () => {
    return (
        <div style={{marginBottom:'20px'}}>
            <Card title="Mr.Ahmed Shah" extra={<p href="#">Token:15</p>}>
                <p>Dr.Irshad Khan</p>
                <p>12:00PM to 2:00PM</p>
            </Card>
        </div>
    )
}

const Appointments = () => {
    return (
        <div>
            <h1 style={{ fontFamily: 'M PLUS Code Latin', margin: '20px', textAlign: 'center' }} >Appointments</h1>
            {Appointment()}
            {Appointment()}
            <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
                <LabelBottomNavigation />
            </div>
        </div>
    )
}

export default Appointments
