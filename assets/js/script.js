// List of image names
const imageNames = [
    "130219143405.jpeg", "130219143516.jpeg", "130219143640.jpeg", "130219143738.jpeg",
    "130219143820.jpeg", "130219143904.jpeg", "130219144001.jpeg", "130219144049.jpeg",
    "130219144216.jpeg", "141215103641.jpeg", "141215103702.jpeg", "151215173335.jpeg",
    "151215173428.jpeg", "151215173516.jpeg", "151215173547.jpeg", "151215173616.jpeg",
    "151215173644.jpeg", "151215173702.jpeg", "151215174421.jpeg", "151215173829.jpeg",
    "151215173950.jpeg", "151215174013.jpeg", "151215174033.jpeg", "151215174103.jpeg",
    "151215174311.jpeg", "151215174421.jpeg", "151215174542.jpeg", "151215174652.jpeg",
    "240220092313.jpeg", "240220104541.jpeg", "240220104637.jpeg", "240220104740.jpeg",
    "240220104829.jpeg", "280218090840.jpeg", "280218091033.jpeg", "280218091304.jpeg",
    "280218091609.jpeg", "280218091828.jpeg", "280323093229.jpeg", "280323093355.jpeg",
    "280323093649.jpeg", "280323094535.jpeg", "280323094718.jpeg", "280323094822.jpeg",
    "280323095012.jpeg", "280323095121.jpeg", "280323095344.jpeg", "280323095423.jpeg",
    "280323095523.jpeg"
];

// Color names corresponding to the images
const colorNames = [
    "CAPUCCINO", "SCARLET", "ICE", "CARAMEL", "CIPRESS", "CAPRI", "MUSTARD", "STONE",
    "NUDE", "APPLE GREEN", "LODEN GREEN", "ORANGE", "IVORY", "SIENA BROWN", "BROWN",
    "LIGHT BLUE", "ULTRAMARINE", "ROYAL BLUE", "PETROL", "VIOLET", "GRAPHITE", "BLACK",
    "MUD", "TURQUOISE", "LEMON", "PETROL", "PINK", "MANGO", "SMOKE", "STORM GREY",
    "MINT", "SLATE", "RUST", "LIGHT GREY", "WHITE", "LILAC GREY", "PISTACHIO", "SKY",
    "MOKA", "SPUN SUGAR", "CELADON GREEN", "VANILLA", "DEEP GREEN", "ALMOND", "ORCHID ICE",
    "IRIS PURPLE", "ICED COFFEE", "AMMONITE", "BLUSH PINK"
];

// Function to generate HTML for color options
function generateColorOptions() {
    const toolbar = document.querySelector('.btn-toolbar[role="toolbar"]');
    imageNames.forEach((imageName, index) => {
        const optId = `opt_${26800 + index}`; // Unique ID for each option
        const colorName = colorNames[index];

        const input = document.createElement('input');
        input.type = 'radio';
        input.id = optId;
        input.name = 'opt_1362';
        input.value = `val_${26800 + index}`;
        input.className = 'btn-check';
        input.autocomplete = 'off';
        input.required = 'required';

        const label = document.createElement('label');
        label.tabIndex = index;
        label.className = 'btn btn-outline-dark rounded-0 popover-dismiss p-1 m-2';
        label.htmlFor = optId;
        label.title = colorName;
        label.setAttribute('data-bs-toggle', 'popover');
        label.setAttribute('data-bs-trigger', 'hover');
        label.setAttribute('data-bs-placement', 'top');
        label.setAttribute('data-bs-html', 'true');
        label.setAttribute('data-bs-content', `<img src='img/${imageName}' class='center-block' border='0' alt='' width='130' height='130'>`);

        const img = document.createElement('img');
        img.src = `img/${imageName}`;
        img.alt = '';
        img.border = '0';
        img.width = '50';
        img.height = '50';

        label.appendChild(img);
        toolbar.appendChild(input);
        toolbar.appendChild(label);
    });
}

// Generate color options when the page loads
document.addEventListener("DOMContentLoaded", generateColorOptions);
