<!--Eventlistener when clicking on the Size buttons to update pricing-->
document.addEventListener("DOMContentLoaded", function() {
    const sizeOptions = document.querySelectorAll('input[name="opt_84"]');
    const priceDisplay = document.getElementById('priceDisplay');

    // Initial price
    let currentPrice = 149.00;

    function updatePrice() {
        const selectedSize = document.querySelector('input[name="opt_84"]:checked');
        currentPrice = selectedSize.id === 'opt_272' ? 149.00 : 199.00;
        priceDisplay.textContent = `€${currentPrice.toFixed(2)}`;
        updateTotalPrice(); // Update total price if quantity changes
    }

    function updateTotalPrice() {
        const quantity = parseInt(document.getElementById('quantity').value);
        const total = currentPrice * quantity;
        priceDisplay.textContent = `€${total.toFixed(2)}`;
    }

    // Size change listener
    sizeOptions.forEach(option => {
        option.addEventListener('change', updatePrice);
    });

    // Quantity change listeners (add to your existing quantity.js)
    document.getElementById('increase').addEventListener('click', updateTotalPrice);
    document.getElementById('decrease').addEventListener('click', updateTotalPrice);
});



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

    // Create a wrapper div for the grid with more columns on smaller screens
    const gridContainer = document.createElement('div');
    gridContainer.className = "grid grid-cols-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"; // More columns on mobile

    imageNames.forEach((imageName, index) => {
        const optId = `opt_${26800 + index}`;
        const colorName = colorNames[index];

        // Create radio input
        const input = document.createElement('input');
        input.type = 'radio';
        input.id = optId;
        input.name = 'colorSelection';
        input.value = colorName;
        input.className = 'hidden';

        // Create label (acts as a button)
        const label = document.createElement('label');
        label.htmlFor = optId;
        label.className = 'color-button cursor-pointer flex flex-col items-center p-2 border rounded-md bg-gray-100 shadow-md hover:bg-gray-200 transition relative';

        // Image inside the button with responsive sizes
        const img = document.createElement('img');
        img.src = `img/${imageName}`;
        img.alt = colorName;
        img.className = 'w-8 h-8 sm:w-12 sm:h-12 object-contain'; // Use object-contain to prevent image clipping

        // Enlarged image and name on hover
        const enlargedImage = document.createElement('div');
        enlargedImage.className = 'enlarged-image hidden absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border rounded-md shadow-lg';
        enlargedImage.style.top = '100%';

        const enlargedImg = document.createElement('img');
        enlargedImg.src = `img/${imageName}`;
        enlargedImg.alt = colorName;
        enlargedImg.width = 120;
        enlargedImg.height = 120;
        enlargedImg.className = 'mx-auto';

        const enlargedText = document.createElement('span');
        enlargedText.innerText = colorName;
        enlargedText.className = 'font-serif text-center block mt-2';

        enlargedImage.appendChild(enlargedImg);
        enlargedImage.appendChild(enlargedText);

        // Add hover effect to show enlarged image
        label.addEventListener('mouseenter', () => {
            enlargedImage.classList.remove('hidden');
        });
        label.addEventListener('mouseleave', () => {
            enlargedImage.classList.add('hidden');
        });

        // Add selection effect
        input.addEventListener('change', () => {
            document.querySelectorAll('.color-button').forEach(button => {
                button.classList.remove('border-blue-500', 'bg-blue-100');
            });
            label.classList.add('border-blue-500', 'bg-blue-100');
        });

        label.appendChild(img);
        label.appendChild(enlargedImage);
        gridContainer.appendChild(input);
        gridContainer.appendChild(label);
    });

    toolbar.appendChild(gridContainer);
}

// Run function when page loads
document.addEventListener("DOMContentLoaded", generateColorOptions);
