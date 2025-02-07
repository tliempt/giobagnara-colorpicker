const imageNames = [
    "LODEN_GREEN.png", // LODEN GREEN
    "DEEP_GREEN.png", // DEEP GREEN
    "CIPRESS.png", // CIPRESS
    "CELADON_GREEN.png", // CELADON GREEN
    "PISTACHIO.png", // PISTACHIO
    "MINT.png", // MINT
    "APPLE_GREEN.png", // APPLE GREEN
    "LEMON.png", // LEMON
    "SIENA_BROWN.png", // SIENA BROWN
    "ORANGE.png", // ORANGE
    "MANGO.png", // MANGO
    "SCARLET.png", // SCARLET
    "RED.png", // RED
    "VANILLA.png", // VANILLA
    "IVORY.png", // IVORY
    "ALMOND.png", // ALMOND
    "WHITE.png", // WHITE
    "ICE.png", // ICE
    "ICED_COFFEE.png", // ICED COFFEE
    "MUSTARD.png", // MUSTARD
    "CARAMEL.png", // CARAMEL
    "CAPUCCINO.png", // CAPUCCINO
    "RUST.png", // RUST
    "MOKA.png", // MOKA
    "BLUSH_PINK.png", // BLUSH PINK
    "ORCHID_ICE.png", // ORCHID ICE
    "IRIS_PURPLE.png", // IRIS PURPLE
    "NUDE.png", // NUDE
    "PINK.png", // PINK
    "LILAC_GREY.png", // LILAC GREY
    "STORM_GREY.png", // STORM GREY
    "VIOLET.png", // VIOLET
    "SPUN_SUGAR.png", // SPUN SUGAR
    "CAPRI.png", // CAPRI
    "SKY.png", // SKY
    "LIGHT_BLUE.png", // LIGHT BLUE
    "TURQUOISE.png", // TURQUOISE
    "ULTRAMARINE.png", // ULTRAMARINE
    "ROYAL_BLUE.png", // ROYAL BLUE (moved next to ULTRAMARINE)
    "PETROL.png", // PETROL (moved next to ULTRAMARINE)
    "LIGHT_GREY.png", // LIGHT GREY
    "AMMONITE.png", // AMMONITE
    "STONE.png", // STONE
    "BROWN.png", // BROWN
    "SMOKE.png", // SMOKE
    "MUD.png", // MUD
    "GRAPHITE.png", // GRAPHITE
    "SLATE.png", // SLATE
    "BLACK.png"  // BLACK
];

const colorNames = [
    "LODEN GREEN", "DEEP GREEN", "CIPRESS", "CELADON GREEN", "PISTACHIO", "MINT",
    "APPLE GREEN", "LEMON", "SIENA BROWN", "ORANGE", "MANGO", "SCARLET", "RED",
    "VANILLA", "IVORY", "ALMOND", "WHITE", "ICE", "ICED COFFEE", "MUSTARD", "CARAMEL",
    "CAPUCCINO", "RUST", "MOKA", "BLUSH PINK", "ORCHID ICE", "IRIS PURPLE", "NUDE",
    "PINK", "LILAC GREY", "STORM GREY", "VIOLET", "SPUN SUGAR", "CAPRI", "SKY",
    "LIGHT BLUE", "TURQUOISE", "ULTRAMARINE", "ROYAL BLUE", "PETROL", "LIGHT GREY",
    "AMMONITE", "STONE", "BROWN", "SMOKE", "MUD", "GRAPHITE", "SLATE", "BLACK"
];
// Function to generate color options in a grid format
function generateColorOptions() {
    const toolbar = document.querySelector('.btn-toolbar[role="toolbar"]');

    // Create a wrapper div for the grid
    const gridContainer = document.createElement('div');
    gridContainer.className = "grid grid-cols-7 gap-4"; // Tailwind grid

    // Use the original imageNames and colorNames arrays
    imageNames.forEach((imageName, index) => {
        const optId = `opt_${26800 + index}`;
        const colorName = colorNames[index];

        // Create radio input
        const input = document.createElement('input');
        input.type = 'radio';
        input.id = optId;
        input.name = 'opt_1362';
        input.value = `val_${26800 + index}`;
        input.className = 'hidden'; // Hide default radio button

        // Create label (acts as a button)
        const label = document.createElement('label');
        label.htmlFor = optId;
        label.className = 'color-button cursor-pointer flex flex-col items-center p-3 border rounded-md bg-gray-100 shadow-md hover:bg-gray-200 transition relative';

        // Image inside the button
        const img = document.createElement('img');
        img.src = `img/${imageName}`;
        img.alt = colorName;
        img.width = 50;
        img.height = 50;

        // Enlarged image and name on hover
        const enlargedImage = document.createElement('div');
        enlargedImage.className = 'enlarged-image';
        const enlargedImg = document.createElement('img');
        enlargedImg.src = `img/${imageName}`;
        enlargedImg.alt = colorName;
        enlargedImg.width = 120;
        enlargedImg.height = 120;
        const enlargedText = document.createElement('span');
        enlargedText.innerText = colorName;
        enlargedImage.appendChild(enlargedImg);
        enlargedImage.appendChild(enlargedText);

        label.appendChild(img);
        label.appendChild(enlargedImage);
        gridContainer.appendChild(input);
        gridContainer.appendChild(label);
    });

    toolbar.appendChild(gridContainer);
}

// Run function when page loads
document.addEventListener("DOMContentLoaded", generateColorOptions);