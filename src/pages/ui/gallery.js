import React, { Component } from 'react';
import { Card, Row, Col, Modal } from 'antd';

class Gallery extends Component {

    state = {
        visiable: false,
        currentImg: ''
    }
    openImg = (img) => {
        this.setState({
            currentImg: img,
            visiable: true
        })
    }

    render() {
        const img = [
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['6.png', '7.png', '8.png', '9.png', '10.png'],
            ['11.png', '12.png', '13.png', '14.png', '15.png'],
            ['16.png', '17.png', '18.png', '19.png', '20.png'],
            ['21.png', '22.png', '23.png', '24.png', '25.png'],
        ];

        const imgList = img.map((list) => list.map(item =>
            <Card
                key={item}
                cover={<img src={'gallery/' + item} alt={item} />}
                onClick={() => { this.openImg('gallery/' + item) }}
            >
                <Card.Meta
                    title="React Demo"
                    description="做全栈攻城狮"
                />
            </Card>
        ));

        return (
            <div>
                <Row gutter={10}>
                    <Col md={5}>{imgList[0]}</Col>
                    <Col md={5}>{imgList[1]}</Col>
                    <Col md={5}>{imgList[2]}</Col>
                    <Col md={5}>{imgList[3]}</Col>
                    <Col md={4}>{imgList[4]}</Col>
                </Row>
                <Modal
                    height={520}
                    width={350}
                    title="图片预览"
                    visible={this.state.visiable}
                    onOk={() => {
                        this.setState({
                            visiable: false
                        });
                    }}
                    onCancel={() => {
                        this.setState({
                            visiable: false
                        });
                    }}
                    footer={null}
                >
                    <img src={this.state.currentImg} alt="预览图片" width="300" />
                </Modal>
            </div>
        );
    }
}

export default Gallery;