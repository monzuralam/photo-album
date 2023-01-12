import React, { Component } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

class LatestPhotos extends Component {
    state = {
        photos: [],
        page: 1,
        search_query: '',
        searching: false,
        error: false
    }

    componentDidMount = (e) => {
        const { page } = this.state;

        axios.get('https://api.unsplash.com/photos/?client_id=oD50GgPO_JQ3DU51-idDcfmudPcasp_e467hL-BmMcw&per_page=16').then((res) => {
            this.setState({
                photos: res.data,
                page: page + 1
            })
        }).catch(() => {
            this.setState({
                error: true
            })
        })

        console.log('loaded');
    }

    loadMoreImages = () => {
        const { page, searching, search_query } = this.state;

        this.setState( {
            page: page + 1
        } );

        searching ?
            axios.get('https://api.unsplash.com/search/photos/?client_id=oD50GgPO_JQ3DU51-idDcfmudPcasp_e467hL-BmMcw&per_page=16&page=' + page + '&query=' + search_query).then(
                res => {
                    this.setState({
                        photos: res.data.results,
                        search_query: search_query,
                    })
                }).catch(() => {
                    this.setState({
                        error: true
                    })
                }) :

            axios.get('https://api.unsplash.com/photos/?client_id=oD50GgPO_JQ3DU51-idDcfmudPcasp_e467hL-BmMcw&per_page=16&page=' + page).then((res) => {
                this.setState({
                    photos: res.data
                })
            }).catch(() => {
                this.setState({
                    error: true
                })
            })

        console.log( this.state.page )

        window.scrollTo(0, 0);
    }

    searchPhotoTrigger = (e) => {
        e.preventDefault();
        const searchText = e.target[0].value;
        const { page } = this.state;

        axios.get('https://api.unsplash.com/search/photos/?client_id=oD50GgPO_JQ3DU51-idDcfmudPcasp_e467hL-BmMcw&per_page=16&query=' + searchText + '& +page=' + page).then((res) => {
            this.setState({
                photos: res.data.results,
                searching: true,
                search_query: searchText,
                page: 2
            });
        }).catch(() => {
            this.setState({
                error: true
            })
        })

        console.log('submit');
        console.log( this.state.page )
    }

    render() {
        const { photos, error, searching, search_query } = this.state;
        return (
            <>
                <section className="latest-photos fix">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-9 col-12">
                                <h2 className="section-title">
                                    { searching ? <span>Search for: { search_query }</span> : <span>Latest Photos</span>}
                                </h2>
                            </div>
                            <div className="col-md-3 col-12">
                                <div className="input-group mb-3">
                                    <form action="" className='input-group search-form' onSubmit={this.searchPhotoTrigger}>
                                        <input type="text" className="form-control" placeholder="Enter Keyword..." />
                                        <input type="submit" className="btn btn-outline-secondary" value="Search" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                error &&
                                <div>
                                    <h2>Network Error!</h2>
                                </div>
                            }
                            {
                                photos.map((photo, index) => {
                                    return (
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-2 col-12" key={index}>
                                            <div className="photo mb-4">
                                                <div className="photo-wrapper">
                                                    <div className="photo-thumb">
                                                        <Link to={"/photo/"+photo.id} >
                                                            <img src={photo.urls.small} alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="photo-content text-start">
                                                        <h3>
                                                            <Link to={`photo/${photo.id}`} >
                                                                {photo.alt_description}
                                                            </Link>
                                                        </h3>
                                                        <div className="author d-flex">
                                                            <div className="icon d-flex align-items-center justify-content-center">
                                                                <img src={photo.user.profile_image.small} alt={photo.alt_description} />
                                                            </div>
                                                            <div className="author-name">
                                                                <p>
                                                                    <a href={photo.user.links.html} target="_blank" rel="noopener noreferrer">
                                                                        {photo.user.name}
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="photo-meta d-flex justify-content-between">
                                                        <div className="download d-flex align-items-center justify-content-center mr-2">
                                                            <div className="download-icon d-flex align-items-center justify-content-center">
                                                                <FontAwesomeIcon icon={faThumbsUp} />
                                                            </div>
                                                            <div className="download-count">
                                                                <p>{photo.likes}</p>
                                                            </div>
                                                        </div>
                                                        <div className="download d-flex align-items-center justify-content-center">
                                                            <div className="download-count download-btn">
                                                                <p>
                                                                    <a download href={photo.urls.full} title={photo.alt_description}>
                                                                        <FontAwesomeIcon icon={faDownload} /> Download
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className="row mt-3 mb-5">
                            <div className="col-12">
                                <div className="load-more">
                                    <div className="load-more-wrapper">
                                        <button className="btn btn-dark btn-lg" onClick={this.loadMoreImages}>Load More</button>
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

export default LatestPhotos;