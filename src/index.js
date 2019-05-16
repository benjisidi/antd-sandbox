import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Card, Typography } from 'antd';
import ListEditorExample from './pages/ListEditorExample';
import DragAndDropExample from './pages/DragAndDropExample';
import Sortable from './pages/Sortable';
import AvsB from './pages/AvBExample'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {DragSource} from 'react-dnd';
const { Header, Content, Footer } = Layout;



class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    {/* Header is just the nav menu */}
                    <Header>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px', marginLeft: '5%' }}
                        >
                            <Menu.Item key="1">
                                List Editor
                                <Link to="/" />
                            </Menu.Item>
                            <Menu.Item key="2">
                                Drag n Drop
                                <Link to="/dnd" />
                            </Menu.Item>
                            <Menu.Item key="3">
                                A vs B
                                <Link to="/avb" />
                            </Menu.Item>
                        </Menu>
                    </Header>
                    {/* Content contains our various pages */}
                    <Content style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Route exact path="/" component={ListEditorExample} />
                        <Route path="/dnd" component={Sortable} />
                        <Route path="/avb" component={AvsB} />
                    </Content>
                </Layout>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));