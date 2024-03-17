function initAutocomplete() {
    const input = document.getElementById("addressInput");
    const options = {
        fields: ["address_components"],
        types: ["(cities)"],
    };

    const autocomplete = new google.maps.places.Autocomplete(
        input,
        options
    );

    autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        let city, state, country;
        place.address_components.forEach(component => {
            if (component.types.includes("locality")) {
                city = component.long_name;
            }
            if (component.types.includes("administrative_area_level_1")) {
                state = component.long_name;
            }
            if (component.types.includes("country")) {
                country = component.long_name;
            }
        });

        // Update the input value with the city, state, and country
        input.value = `${city}, ${state}, ${country}`;
    });
}

window.initAutocomplate = initAutocomplete;
