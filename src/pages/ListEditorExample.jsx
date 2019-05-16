import React from 'react';
import { Card, Typography } from 'antd';
import { CountryAutocomplete } from '../components/CountryAutocomplete';
import ListEditor from '../components/ListEditor';
const { Title } = Typography;

const complexComponent = (
    <div style={{background: '#ECECEC', marginBottom: '24px', padding: "8px", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Card title="Card title" bordered={false} style={{ width: 300}}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        <CountryAutocomplete style={{marginTop: "8px", width: 200 }}/>
    </div>
)

export default class ListEditorExample extends React.Component {
    render() {
        return (
        <React.Fragment>
            <Title>List Editor</Title>
            <div style={{margin: "0 auto", float: "none"}}>
                <ListEditor template={complexComponent} />
            </div>
        </React.Fragment>
        )
    }
}