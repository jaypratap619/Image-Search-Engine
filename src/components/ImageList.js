import React, { useState, useEffect } from 'react'

const ImageList = ({ images, term }) => {
   
    const [counter, setCounter] = useState(0)
    useEffect(()=>{
        setCounter(0);
    }, [term])

    return (
        <div className="">
            <div class="row">
                {
                    images.slice(0, 8).map((image, index) => {

                        return <div class="col-lg-3 col-sm-4 my-3">

                            <img style={{ height: '150px', width: '100%', objectFit:'cover' }} className='img-fluid rounded' src={image.urls.regular} key={image.id} />

                        </div>
                    })
                }
                {
                    images.length > 8 &&
                    <div>
                        
                            <div className='text-center'>
                                <div class="row">
                                    {
                                        images.slice(8, 8 + (counter * 8)).map((image, index) => {

                                            return <div class="col-lg-3 col-sm-4 my-3">

                                                <img style={{ height: '150px', width: '100%' }} className='img-fluid rounded' src={image.urls.regular} key={image.id} />

                                            </div>
                                        })
                                    }
                                </div>
                                {
                                    (counter)*8 <= images.length - 8 ?
                                    <button onClick={() => setCounter(counter + 1)} type="button" class="btn btn-dark">Load More</button>
                                    :
                                    null
                                }
                            </div>
                        

                    </div>
                }
            </div>

        </div>

    )
}

export default ImageList;