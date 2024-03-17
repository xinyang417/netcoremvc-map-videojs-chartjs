let map;
const player = videojs('video'); // Initialize Video.js player

function initMap() {
    // Create the map with no initial style specified
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 34.0522, lng: -175 }, 
        zoom: 3, 
        mapTypeControl: false,
    });

    // Define the locations and their coordinates
    const locations = [
        { lat: 49.2827, lng: -123.1207, name: "Vancouver", videoUrl: "" },
        { lat: 43.6532, lng: -79.3832, name: "Toronto", videoUrl: "" },
        { lat: 22.3193, lng: 114.1694, name: "Hong Kong", videoUrl: "http://www.youtube.com/watch?v=gYO1uk7vIcc" },
        { lat: 30.0493, lng: 101.9625, name: "Garzê Tibetan Autonomous Prefecture", videoUrl: "/media/garze.mov"  },
        { lat: 40.7128, lng: -74.0060, name: "New York City", videoUrl: "" }, 
        { lat: 34.0522, lng: -118.2437, name: "Los Angeles", videoUrl: "" },
        { lat: 35.7796, lng: -78.6382, name: "Raleigh", videoUrl: "" },
        { lat: -8.4095, lng: 115.1889, name: "Bali", videoUrl: "https://www.youtube.com/watch?v=oBFQ0ZuhXrg" },
        { lat: 20.6534, lng: -105.2253, name: "Puerto Vallarta", videoUrl: "/media/pv.mov"  },
    ];

    // Loop through the locations array and add markers
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name
        });

        // Add click event listener to each marker
        marker.addListener('click', () => {
            const videoUrl = location.videoUrl;
            
            if (videoUrl !== "") {
                if (videoUrl.includes("youtube.com")) {
                    // Set YouTube video as source
                    player.src({
                        techOrder: "youtube",
                        type: "video/youtube",
                        src: videoUrl
                    });
                } else {
                    // Set local video file as source
                    player.src({
                        type: "video/mp4",
                        src: videoUrl
                    });
                }
                player.play();
                document.getElementById('video').style.display = 'block';
                document.getElementById('close-btn').style.display = 'block';
            }
        });

    });

    // Add a style-selector control to the map.
    const styleControl = document.getElementById("style-selector-control");

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

    // Set the map's style to the initial value of the selector.
    const styleSelector = document.getElementById("style-selector");

    map.setOptions({ styles: styles[styleSelector.value] });

        
    // Apply new JSON when the user selects a different style.
    styleSelector.addEventListener("change", () => {
        map.setOptions({ styles: styles[styleSelector.value] });
    });
}

const styles = {
    night: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#242f3e" }],
        },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
        },
        {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
        },
        {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
        },
        {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
        },
    ],
    retro: [
        { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
        {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#f5f1e6" }],
        },
        {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#c9b2a6" }],
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "geometry.stroke",
            stylers: [{ color: "#dcd2be" }],
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ae9e90" }],
        },
        {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [{ color: "#dfd2ae" }],
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#dfd2ae" }],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#93817c" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#a5b076" }],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#447530" }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#f5f1e6" }],
        },
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#fdfcf8" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#f8c967" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#e9bc62" }],
        },
        {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [{ color: "#e98d58" }],
        },
        {
            featureType: "road.highway.controlled_access",
            elementType: "geometry.stroke",
            stylers: [{ color: "#db8555" }],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ color: "#806b63" }],
        },
        {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [{ color: "#dfd2ae" }],
        },
        {
            featureType: "transit.line",
            elementType: "labels.text.fill",
            stylers: [{ color: "#8f7d77" }],
        },
        {
            featureType: "transit.line",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ebe3cd" }],
        },
        {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [{ color: "#dfd2ae" }],
        },
        {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#b9d3c2" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#92998d" }],
        },
    ],
};

window.initMap = initMap;

// Close video player on click
document.getElementById('close-btn').addEventListener('click', () => {
    player.pause();
    document.getElementById('video').style.display = 'none';
    document.getElementById('close-btn').style.display = 'none';
});
