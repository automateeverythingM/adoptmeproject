import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropDown from "./useDropDown";
import Results from "./Results";

export default function SearchParams() {
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropDown] = useDropDown("Animal", "dog", ANIMALS);
    const [breed, BreedDropDown, setBreed] = useDropDown("Breed", "", breeds);
    const [pets, setPets] = useState([]);

    async function requestPets() {
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal,
        });

        animals ? setPets(animals) : null;
        console.log(pets);
    }

    useEffect(() => {
        setBreeds([]);
        setBreed("");
        pet.breeds(animal).then(({ breeds }) => {
            const breedNames = breeds.map((breed) => breed.name);
            setBreeds(breedNames);
        }, console.error);
    }, [animal, setBreeds, setBreed]);

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}
            >
                <label htmlFor="location">
                    Location
                    <input
                        type="text"
                        id="location"
                        value={location}
                        placeholder="location"
                        onChange={(event) => setLocation(event.target.value)}
                        onBlur={(event) => setLocation(event.target.value)}
                    />
                </label>

                <AnimalDropDown />
                <BreedDropDown />

                <button>Submit</button>
            </form>

            <Results pets={pets} />
        </div>
    );
}
