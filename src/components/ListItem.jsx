import React, { useImperativeHandle, useRef } from 'react';
import { Card } from 'antd';
import { DragSource, DropTarget } from 'react-dnd';

const itemTypes = {
    LISTITEM: 'listItem'
}

const itemSource = {
    beginDrag(props) {
        return {id: props.id, index: props.index};
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

function ListItem({ connectDragSource, isDragging }, contents) {
    return connectDragSource(
        <div>
            <Card >
                DragMe
            </Card>
        </div>
    )
}

const DragCard = React.forwardRef(
    (props, ref) => {
      let { text, style, connectDragSource, connectDropTarget } = props;
      const elementRef = useRef(null);
      connectDragSource(elementRef);
      connectDropTarget(elementRef);
      useImperativeHandle(ref, () => ({
        getNode: () => elementRef.current
      }));
      return (
        <div ref={elementRef}>
            <Card style={style}>
                {text}
            </Card>
        </div>
      );
    }
  );

export default DropTarget(
    itemTypes.LISTITEM,
    {
        hover(props, monitor, component) {
            if (!component) {
                return null;
            }
            // node = HTML Div element from imperative API
            const node = component.getNode();
            if (!node) {
            return null;
            }
            // Get the index of the item we're dragging (enumerated in DraggableList)
            const dragIndex = monitor.getItem().index;
            const hoverIndex = props.index;
            console.log(dragIndex, hoverIndex);
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = node.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
                // Dragging downwards
            if ((dragIndex < hoverIndex && hoverClientY < hoverMiddleY) ||
                // Dragging upwards
                (dragIndex > hoverIndex && hoverClientY > hoverMiddleY)) {
                return;
            }
            // Time to actually perform the action
            console.log(dragIndex, hoverIndex);
            props.moveItem(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            // monitor.getItem().index = hoverIndex;
        }
    },
    connect => ({
        connectDropTarget: connect.dropTarget()
    })
)(
        DragSource(
            itemTypes.LISTITEM,
            itemSource,
            collect
        )(DragCard)
    )