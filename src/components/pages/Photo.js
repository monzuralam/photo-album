import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Photo = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('https://api.unsplash.com/photos/' + id + '/?client_id=oD50GgPO_JQ3DU51-idDcfmudPcasp_e467hL-BmMcw').then((res) => {
            setData({
                photo: res.data
            })

        }).catch(() => {
            this.setState({
                error: true
            })
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <section className="photo-section pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="photo-wrapper">
                                <div className="photo-description">
                                    <h2>{data?.photo?.description}</h2>
                                    <img src={data?.photo?.urls?.small} alt="" className='img-fluid' />
                                    <div className="photo-description-meta mt-4">
                                        <p><strong>Total Downloads:</strong> {data?.photo?.downloads} </p>
                                        <p><strong>Total Likes:</strong> {data?.photo?.likes} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Photo;