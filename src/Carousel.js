import React, { Component } from "react";

export default class Carousel extends Component {
    state = {
        photos: [],
        active: 0,
    };

    static getDerivedStateFromProps({ media }) {
        let photos;
        if (media.length) photos = media.map(({ large }) => large);
        else photos = ["http://placecorgi.com/600/600"];

        return { photos };
    }

    handleClick = (i) => {
        this.setState({
            active: +i,
        });
    };

    render() {
        const { photos, active } = this.state;
        return (
            <div className="carousel">
                <img src={photos[active]} alt="animal" />
                <div className="carousel-smaller">
                    {photos.map((photo, i) => (
                        //eslint-disable-next-line
                        <img
                            key={photo}
                            src={photo}
                            alt="animal thumbnail"
                            data-index={i}
                            className={i === active ? "active" : ""}
                            onClick={() => this.handleClick(i)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
