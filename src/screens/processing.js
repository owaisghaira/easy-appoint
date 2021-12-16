import React from 'react'
import { Avatar } from 'antd';
import ApplicationLayout from '../layout'
import { Layout } from 'antd'
const { Content } = Layout
const Processing = () => {
    return (
        <ApplicationLayout>
            <Content>
                <div >
                    <h1 style={{ fontFamily: 'M PLUS Code Latin', margin: '20px', textAlign: 'center' }} >Processing</h1>
                    <div style={{ margin: '0 auto', textAlign: 'center' }}>
                        <Avatar size={120}>
                            <span style={{fontSize:50}}>12</span>
                        </Avatar>
                    </div>
                    <div style={{ position: 'fixed',left: 0,right: 0,bottom: 40, display: 'flex', justifyContent: 'space-between', margin: '30px' }}>
                        <Avatar size={80}>
                            Next
                        </Avatar>
                        <Avatar size={80}>
                            Hold
                        </Avatar>
                    </div>
                </div>
            </Content>
        </ApplicationLayout>

    )
}

export default Processing
