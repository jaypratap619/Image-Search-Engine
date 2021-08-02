import React from 'react'

export const ImageListHeader = (props) => {
    return (
        <div className='mt-2 mb-1'>
            <h3 className='h3 mb-0 text-capatilize'>{props.term}</h3>
            {
                props.size === 1 ?
                <small class="text-muted">{props.size} image has been found</small>
                :
                <small class="text-muted">{props.size} images has been found</small>
            }
        </div>
    )
}
