import React, {useState} from 'react'
import Link from 'next/link'
import {Carousel, Button, Drawer } from 'antd'
import {BugTwoTone, CarTwoTone} from '@ant-design/icons'

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const fake_data = () => {  
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

    return (
        <div style={{position: 'relative'}}>
            Fake Data
            <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                width="750px"
            ></Drawer>
            <Link id="Link" href="/durable_articles">
                <Button type="primary" danger for="Link" >
                    <CarTwoTone /><a>Register</a>
                </Button>
            </Link>
            {/* <Button size="large" type="primary" onClick={onOpenDraw} >Open</Button> */}
            <Button type="primary" disabled>
                <BugTwoTone /> Primary(disabled)
            </Button>

            <Carousel autoplay>
                <div>
                <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </div>
    )
}

export default fake_data
