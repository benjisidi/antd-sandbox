import uniqueId from 'lodash/uniqueId';
import React from 'react';
import ReactDOM from 'react-dom';
import Sortable from 'react-sortablejs';
import {Card} from 'antd';

export class SortableList extends React.Component {
    state = {
        items: ['Apple', 'Banana', 'Cherry', 'Guava', 'Peach', 'Strawberry']
    };

    render() {
        const items = this.state.items.map(val => (<Card key={uniqueId()} style={{width:300}} data-id={val} title={val}>{val}</Card>));

        return (
            <div>
                <Sortable
                    tag="div" // Defaults to "div"
                >
                    {items}
                </Sortable>
            </div>
        );
    }
}