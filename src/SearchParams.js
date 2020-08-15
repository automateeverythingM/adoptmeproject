import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropDown from "./useDropDown";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

export default function SearchParams() {
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropDown] = useDropDown("Animal", "dog", ANIMALS);
    const [breed, BreedDropDown, setBreed] = useDropDown("Breed", "", breeds);
    const [pets, setPets] = useState([]);
    const [theme, setTheme] = useContext(ThemeContext);

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
                <label htmlFor="theme">
                    Theme:
                    <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        onBlur={(e) => setTheme(e.target.value)}
                    >
                        <option value="peru">Peru</option>
                        <option value="darkblue">DarkBlue</option>
                        <option value="mediumorchid">MediumOrchid</option>
                        <option value="olive">Olive</option>
                    </select>
                </label>

                <button style={{ color: theme }}>Submit</button>
            </form>

            <Results pets={pets} />
        </div>
    );
}
