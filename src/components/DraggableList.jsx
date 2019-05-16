import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ListItem from '../components/ListItem'

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: React.Children.toArray(this.props.children)
        };
        this.moveItem = this.moveItem.bind(this);
        this.updateIndices = this.updateIndices.bind(this);
    }
    
    updateIndices(arr) {
        return arr.map((elem, i) => {
            let newElem = Object.assign({}, elem);
            newElem.index = i;
            return newElem;
        })
    }
    
    moveItem(dragIndex, hoverIndex) {
        let newContents = [...this.state.contents];
        const dragItem =  newContents.splice(dragIndex, 1)[0];
        newContents.splice(hoverIndex, 0, dragItem);
        this.setState({contents: this.updateIndices(newContents)})
    }


    render() {
        return (
            <DragDropContextProvider backend={HTML5Backend}>
                {this.state.contents.map((element, i) => {
                    return React.cloneElement(element, {
                        moveItem: this.moveItem,
                        index: i,
                    })
                })}
            </DragDropContextProvider>
        );
    }
}