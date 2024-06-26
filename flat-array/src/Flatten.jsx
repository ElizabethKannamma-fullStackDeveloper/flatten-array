import React from 'react'

const items = [
    'item 1',
    ['nested item 1.1', 'nested item 1.2'],
    'item 2'
]

function FlattenedList(props) {
    const items = props.items;
    const flatted = items.flat()

    return (
        <ul>
            {flatted.map((item, i) => {
                return <li key={i}>{item}</li>
            })}
        </ul>
    )

}

function Flatten() {
    return (
        <FlattenedList items={items}>Flatten</FlattenedList>
    )
}

export default Flatten