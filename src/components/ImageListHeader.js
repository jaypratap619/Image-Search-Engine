import React from 'react'

export const ImageListHeader = (props) => {
    return (
        <div className='mt-2 mb-1'>
            {
                props.size > 0 &&
                <>
                    {
                        props.size === 1 ?
                            <small class="text-muted">{props.size} image has been found</small>
                            :
                            <small class="text-muted">{props.size} images has been found</small>
                    }
                </>
            }
            <h3 className='h3 mb-0 text-capitalize'>{props.term}</h3>
        </div>
    )
}
