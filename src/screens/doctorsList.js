import React from 'react'
import { Card, Button } from 'antd';

const DoctorsList = () => {
    return (
        <div>
            <h1 style={{ fontFamily: 'M PLUS Code Latin', margin: '20px', textAlign: 'center' }} >Doctors </h1>
            <div>
                <Card title="Dow Hospital" extra={<p href="#">Detail</p>}>
                    <p>Dr.Irshad Khan</p>
                    <p>12:00PM to 2:00PM</p>
                </Card>
                <Button style={{ marginTop: '20px', background: '#e6f7ff' }} block>Add Doctor</Button>
            </div>
        </div>
    )
}

export default DoctorsList
