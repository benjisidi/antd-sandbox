import React from 'react';
import { Button, Row, Col } from 'antd';
import Sortable from 'react-sortablejs';

export default class ListEditor extends React.Component {
    constructor(props) {
        super(props);
        this.addComponent = this.addComponent.bind(this);
        this.subtractComponent = this.subtractComponent.bind(this);
        this.rowTemplate = this.rowTemplate.bind(this);
        this.reOrder = this.reOrder.bind(this);
        this.state = {
            counter: 1,
            components: [this.rowTemplate(0)]
        }
    }

    rowTemplate(key) {
        return (
            <Row key={key} align='middle' type="flex" justify="center">
                {this.props.template}
                <Button id={key} type="primary" icon="minus-circle" onClick={this.subtractComponent} style={{ marginLeft:"8px" }}/>
            </Row>
        )
    }

    addComponent(e) {
        this.setState({
            components: [
                ...this.state.components,
                this.rowTemplate(this.state.counter)
            ],
            counter: this.state.counter + 1})
    }
    
    subtractComponent(e) {
        this.setState({
                components: [
                    ...this.state.components.filter(x => x.key !== e.target.id)
                ]
        })
    }
 
    reOrder(oldIndex, newIndex) {
        let newComponents = [...this.state.components];
        console.log(newComponents);
        let newComponent = newComponents.splice(oldIndex, 1)[0];
        newComponents.splice(newIndex, 0, newComponent);
        console.log(newComponents);
        this.setState({
            components: newComponents
        })
    }

    render() {
        return(
            <div>
                <Col justify="center" type="flex">
                <Sortable onChange={(order, sortable, evt) => {
                    this.reOrder(evt.oldDraggableIndex, evt.newDraggableIndex);
                }}>
                        {this.state.components}
                </Sortable>
                <Row justify="center" type="flex"><Button type="primary" icon="plus-circle" onClick={this.addComponent} style={{ marginBottom: "16px" }}/></Row>
                </Col>
            </div>
        )
    }
}