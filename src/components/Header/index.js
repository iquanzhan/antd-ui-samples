import React, { Component } from 'react';
import { Row, Col } from 'antd';

import './index.less';
import Util from "../../utils/utils";
import axios from "../../axios";


class Index extends Component {

    state = {
        userName: ''
    }

    componentDidMount() {
        this.setState({
            userName: '做全栈攻城狮'
        })

        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000);

        this.getWeatherAPIData();
    }

    getWeatherAPIData = () => {
        let location = "北京";

        let url = `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(location)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`;

        axios.jsonp({ url }).then((res) => {
            let weather = res.results[0].weather_data[0].weather;
            let weatherPic = res.results[0].weather_data[0].dayPictureUrl;

            this.setState({
                weather, weatherPic
            })

        });


    }


    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎您,{this.state.userName}</span>
                        <a href="javascrpt:void();">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.weatherPic} alt="天气图片" />
                        </span>
                        <span className="weather-detail">
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Index;