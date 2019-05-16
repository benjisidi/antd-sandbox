import React, { Component } from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

export default class avb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: ['Blue', 'Red', 'Green', 'Yellow']
        }
        this.handlePick = this.handlePick.bind(this);
    }

    handlePick(e) {
        console.log(e);
    }

    render() {
        const cardStyle = {
            width: 400,
            height: 300,
            display: 'inline-block',
            margin: '10px',
            color: 'white'
        }
        return (
            <div>
                <Title>Pick your favourite colour</Title>
                <Card
                    style={{...cardStyle, background: 'firebrick'}}
                    title=<span style={{color: 'white'}}>Red</span>
                    onClick={e => this.handlePick('red')}
                    hoverable
                    >
                </Card>
                <Card
                    style={{...cardStyle, background: 'navy'}}
                    title=<span style={{color: 'white'}}>Blue</span>
                    onClick={e => this.handlePick('blue')}
                    hoverable
                    >
                </Card>
            </div>
        );
    }
}
