import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                            <h1 className="display-2">Lets Start Using <br/>PayNow</h1>
                            <p className="main-hero-para">Lorem ipsum dolor sit amet. Nam eligendi minima id dicta minus sed magnam aperiam. Qui incidunt ducimus sit molestiae harum At enim internos eos voluptas magni ea consequatur necessitatibus sit assumenda maxime.</p>
                            <h3>Get Early Access for you</h3>
                            <div className="input-group mt-3">
                                <input type="text" className="rounded-pill w-75 me-3 p-2 form-control-text" placeholder="Enter Your Email"/>
                                <div className="input-group-button">Get it Now</div>
                            </div>
                        </div>
                        {/* --------------------------------Header right side-------------------------------- */}
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                            <img src="https://source.unsplash.com/random/1080x1920/?wallpaper,mountains" alt="img" className="img-fluid" />
                            <img src="https://source.unsplash.com/random/1920x1080/?wallpaper,phone" alt="img" className="img-fluid main-hero-img2" />
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
