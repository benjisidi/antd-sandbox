import React from 'react';
import ListItem from '../components/ListItem';
import DraggableList from '../components/DraggableList';

export default class extends React.Component {
    render() {
        return (
            <DraggableList>
                <ListItem key={1} index={1} text='Toast' style={{width:300, textAlign:'center'}}/>
                <ListItem key={2} index={2} text='Bread' style={{width:300, textAlign:'center'}}/>
                <ListItem key={3} index={3} text='Dough' style={{width:300, textAlign:'center'}}/>
            </DraggableList>
        );
    }
}