import React, { Component } from 'react'
import axios from 'axios';

class Photo extends Component {

    state = {
        photo: [],
        loading: true,
        error: false
    }

    componentDidMount = (e) => {
        const search = window.location.search;
        let params = new URLSearchParams( search );
        let photoId = params.get('id');

        axios.get('https://api.unsplash.com/photos/' + photoId + '/?client_id=oD50GgPO_JQ3DU51-idDcfmudPcasp_e467hL-BmMcw').then((res) => {
            this.setState({
                photo: res.data,
            })
        }).catch(() => {
            this.setState({
                error: true
            })
        })
    }

    render() {
        return (
            <>
                <section className="photo-section pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="photo-wrapper">
                                    <div className="photo-description">
                                        <h2>{this.state.photo?.description}</h2>
                                        <img src={this.state.photo?.urls?.small} alt="" className='img-fluid' />
                                        <div className="photo-description-meta mt-4">
                                            <p><strong>Total Downloads:</strong> {this.state.photo?.downloads} </p>
                                            <p><strong>Total Likes:</strong> {this.state.photo?.likes} </p>
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
}

export default Photo;