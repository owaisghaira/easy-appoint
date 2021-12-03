import React, { useEffect } from 'react'
import { AlignLeftOutlined, SearchOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { Input, Badge } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

const MobileHeader = () => {

    let history = useHistory();
    const collections = useSelector((state) => state.collections);
    const dispatch = useDispatch();

    useEffect(() => {

       
    }, [])

    const goToExplore = () => {
        history.push({ pathname: '/explore' });
    }

    const handleClick = async (event) => {
        history.push({ pathname: '/search/term/' + event.target.value });
    }

    const goToHome = () => {
        history.push({ pathname: '/' });
    }

    const goToMyCollection = () => {
        history.push({ pathname: '/my-collection' });
    }

    const renderBadge = () => {
        const arrayColumn = collections.map(x => x.hasNew);

        let display = arrayColumn.some((element) => element);

        if (display) {
            return <Badge color='#cd201f' />
        }
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: 15 }}>
                <div data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <AlignLeftOutlined /> {renderBadge()}
                </div>

                <h4 style={{ fontFamily: "Swissa Piccola Regular" }} onClick={goToHome} >Cotton Concepts</h4>
                <div data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                    <SearchOutlined />
                </div>

            </div>
            <div className="collapse" id="collapseExample" style={{ margin: '15px' }}>
                <p onClick={goToExplore}> Explore</p>
                <p onClick={goToMyCollection}> My Collection {renderBadge()} </p>
            </div>
            <div className="collapse" id="collapseExample1" style={{ margin: '15px' }}>
                <Input size="large" placeholder="search for anything" prefix={<SearchOutlined />} onPressEnter={handleClick} style={{ borderRadius: '8px' }} />
            </div>
        </>
    )
}

export default MobileHeader
