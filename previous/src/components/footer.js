import React from 'react'
import { Layout, Menu } from 'antd';
import { useHistory } from "react-router-dom";

const { Footer } = Layout;

const LayoutFooter = () => {

    let history = useHistory();

    const goToHome = () => {
        history.push({ pathname: '/' });
    }

    const goToExplore = () => {
        history.push({ pathname: '/explore' });
    }

    const goToMyCollection = () => {
        history.push({ pathname: '/my-collection' });
    }

    return (
        <div>
            <Footer>
                <div className="container">
                    <Menu mode="horizontal" className="bottom-menu">
                        <Menu.Item key="home-bottom" onClick={goToHome} >
                            Home
                        </Menu.Item>
                        <Menu.Item key="explore-bottom" onClick={goToExplore} >
                            Explore
                        </Menu.Item>
                        <Menu.Item key="my-collection-bottom"  onClick={goToMyCollection} >
                            My Collection
                        </Menu.Item>
                    </Menu>
                    <span> @ 2021 Cotton Concepts. All rights reserved.</span>
                </div>
            </Footer>
        </div>
    )
}

export default LayoutFooter
