// List of image names
const imageNames = [
    "CAPUCCINO.jpeg", "SCARLET.jpeg", "ICE.jpeg", "CARAMEL.jpeg", "CIPRESS.jpeg", "CAPRI.jpeg",
    "MUSTARD.jpeg", "STONE.jpeg", "NUDE.jpeg", "APPLE GREEN.jpeg", "LODEN GREEN.jpeg", "ORANGE.jpeg",
    "IVORY.jpeg", "SIENA BROWN.jpeg", "BROWN.jpeg", "LIGHT BLUE.jpeg", "ULTRAMARINE.jpeg", "ROYAL BLUE.jpeg",
    "RED.jpeg", "VIOLET.jpeg", "GRAPHITE.jpeg", "BLACK.jpeg", "MUD.jpeg", "TURQUOISE.jpeg", "LEMON.jpeg",
    "PETROL.jpeg", "PINK.jpeg", "MANGO.jpeg", "SMOKE.jpeg", "STORM GREY.jpeg", "MINT.jpeg", "SLATE.jpeg",
    "RUST.jpeg", "LIGHT GREY.jpeg", "WHITE.jpeg", "LILAC GREY.jpeg", "PISTACHIO.jpeg", "SKY.jpeg", "MOKA.jpeg",
    "SPUN SUGAR.jpeg", "CELADON GREEN.jpeg", "VANILLA.jpeg", "DEEP GREEN.jpeg", "ALMOND.jpeg", "ORCHID ICE.jpeg",
    "IRIS PURPLE.jpeg", "ICED COFFEE.jpeg", "AMMONITE.jpeg", "BLUSH PINK.jpeg"
];

// Corresponding color names
const colorNames = [
    "CAPUCCINO", "SCARLET", "ICE", "CARAMEL", "CIPRESS", "CAPRI", "MUSTARD", "STONE",
    "NUDE", "APPLE GREEN", "LODEN GREEN", "ORANGE", "IVORY", "SIENA BROWN", "BROWN",
    "LIGHT BLUE", "ULTRAMARINE", "ROYAL BLUE", "RED", "VIOLET", "GRAPHITE", "BLACK",
    "MUD", "TURQUOISE", "LEMON", "PETROL", "PINK", "MANGO", "SMOKE", "STORM GREY",
    "MINT", "SLATE", "RUST", "LIGHT GREY", "WHITE", "LILAC GREY", "PISTACHIO", "SKY",
    "MOKA", "SPUN SUGAR", "CELADON GREEN", "VANILLA", "DEEP GREEN", "ALMOND", "ORCHID ICE",
    "IRIS PURPLE", "ICED COFFEE", "AMMONITE", "BLUSH PINK"
];

// Function to generate color options in a grid format
function generateColorOptions() {
    const toolbar = document.querySelector('.btn-toolbar[role="toolbar"]');

    // Create a wrapper div for the grid
    const gridContainer = document.createElement('div');
    gridContainer.className = "grid grid-cols-7 gap-4"; // Tailwind grid

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

        // Create label (acts as a box)
        const label = document.createElement('label');
        label.htmlFor = optId;
        label.className = 'cursor-pointer flex flex-col items-center p-3 border rounded-md bg-gray-100 shadow-md hover:bg-gray-200 transition';

        // Image inside the box
        const img = document.createElement('img');
        img.src = `img/${imageName}`;
        img.alt = colorName;
        img.width = 40;
        img.height = 40;
        img.className = 'rounded shadow-sm';

        // Color name under the image
        const text = document.createElement('span');
        text.innerText = colorName;
        text.className = 'text-xs font-semibold mt-2';

        label.appendChild(img);
        label.appendChild(text);
        gridContainer.appendChild(input);
        gridContainer.appendChild(label);
    });

    toolbar.appendChild(gridContainer);
}

// Run function when page loads
document.addEventListener("DOMContentLoaded", generateColorOptions);
