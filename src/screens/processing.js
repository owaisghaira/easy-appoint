import React from 'react'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const Processing = () => {
    return (
        <div >
            <h1 style={{ fontFamily: 'M PLUS Code Latin', margin: '20px', textAlign: 'center' }} >Processing</h1>
            <div style={{ margin: '0 auto', textAlign: 'center' }}>
                <Avatar size={120}>
                    <h1>12</h1>
                </Avatar>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '30px' }}>
                <Avatar size={80}>
                    Next
                </Avatar> <Avatar size={80}>
                    Hold
                </Avatar>
            </div>
        </div>
    )
}

export default Processing
