import React from 'react';
import DayListItem from './DayListItem';

function DayList (props) {
    const days = props.days;
    const dayListItems = days.map(day => 
        <DayListItem 
            key={day.id}
            name={day.name} 
            spots={day.spots} 
            selected={day.name === props.value}
            setDay={props.onChange}
        />     
    );

    return (
        <ul>{dayListItems}</ul>
    )
}

export default DayList;