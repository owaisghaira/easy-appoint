import React, { useState, useEffect } from 'react'
import { useLayout } from '../providers/layout-provider';
import ApplicationLayout from '../layout';
import { ScrollableCategories, StackGrid, ShopsExplorer } from '../components';
import ajaxService from '../services/ajax-service';
import { Layout } from 'antd';

const { Content } = Layout;

const Home = () => {
    //    let { product_group_name, product_group_image } = item._source;

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

        getHomeData();

    }, []);

    return (
        <ApplicationLayout>
            <Content>
                <ShopsExplorer products={products} isMobileLayout={isMobileLayout} />
                <ScrollableCategories isMobileLayout={isMobileLayout} />
                <StackGrid isMobileLayout={isMobileLayout} />
            </Content>
        </ApplicationLayout>
    )
}

export default Home
