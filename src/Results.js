import React from "react";
import Pet from "./Pet";
const Results = ({ pets }) => {
    return (
        <div className="search">
            {!pets.length ? (
                <h1>no pets found</h1>
            ) : (
                pets.map((p) => (
                    <Pet
                        id={p.id}
                        animal={p.type}
                        key={p.id}
                        name={p.name}
                        breed={p.breeds.primary}
                        media={p.photos}
                        location={`${p.contact.address.city}, ${p.contact.address.state}`}
                    />
                ))
            )}
        </div>
    );
};

export default Results;
