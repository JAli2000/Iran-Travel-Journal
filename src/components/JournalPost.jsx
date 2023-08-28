import React from "react";
import '../App.css';

const src = process.env.PUBLIC_URL;

export default function JournalPost(props) {

    if(props.imageUrl.length !== 0)
    return(
        <div className="post">
            <div className="post--image--container">
                <img className="post--image" src={props.imageUrl} alt={props.title} />
            </div>
            <div className="post--content">
                <div className="post--location">
                    <div>
                        <img src={`${src}/images/location-icon.png`} alt="#" />
                        {props.location}
                    </div>
                    <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h1 className="post--title">{props.title}</h1>
                <p className="post--date"> {props.startDate} - {props.endDate}</p>
                <p className="post--description">{props.description}</p>
            </div>
        </div>
    );
}