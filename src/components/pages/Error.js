import React, { Component } from 'react'

class Error extends Component {
    render() {
        return (
            <>
                <section className="error-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <h1>404</h1>
                                <p>Not Found</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Error;