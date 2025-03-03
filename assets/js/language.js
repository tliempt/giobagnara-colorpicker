document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("languageButton");
    const dropdown = document.getElementById("languageDropdown");
    const languageOptions = dropdown.querySelectorAll("a");
    const buttonText = button.querySelector("span");

    // Elements to update based on language
    const productTitle = document.getElementById("productTitle");
    const productDescription = document.getElementById("productDescription");

    // Language translations
    const translations = {
        en: {
            title: "Square Tray - Polo",
            description: "A premium square tray, perfect for elegant presentations. Crafted with fine materials and a sleek design, this tray adds a touch of luxury to any space."
        },
        nl: {
            title: "Vierkant Dienblad - Polo",
            description: "Een premium vierkant dienblad, perfect voor elegante presentaties. Vervaardigd uit hoogwaardige materialen en met een strak ontwerp, voegt dit dienblad een vleugje luxe toe aan elke ruimte."
        },
        fr: {
            title: "Plateau Carré - Polo",
            description: "Un plateau carré haut de gamme, parfait pour des présentations élégantes. Fabriqué avec des matériaux raffinés et un design élégant, il ajoute une touche de luxe à tout espace."
        },
        de: {
            title: "Quadratisches Tablett - Polo",
            description: "Ein hochwertiges quadratisches Tablett, perfekt für elegante Präsentationen. Gefertigt aus edlen Materialien und mit elegantem Design verleiht es jedem Raum einen Hauch von Luxus."
        },
        it: {
            title: "Vassoio Quadrato - Polo",
            description: "Un vassoio quadrato premium, perfetto per presentazioni eleganti. Realizzato con materiali pregiati e un design elegante, aggiunge un tocco di lusso a qualsiasi spazio."
        },
        es: {
            title: "Bandeja Cuadrada - Polo",
            description: "Una bandeja cuadrada premium, perfecta para presentaciones elegantes. Fabricada con materiales de alta calidad y un diseño elegante, añade un toque de lujo a cualquier espacio."
        }
    };

    // Function to update content based on selected language
    function updateLanguage(selectedLanguage) {
        if (translations[selectedLanguage]) {
            productTitle.textContent = translations[selectedLanguage].title;
            productDescription.textContent = translations[selectedLanguage].description;
        }
    }

    // Toggle dropdown visibility
    button.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent the click from bubbling up to the document
        dropdown.classList.toggle("hidden");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function () {
        dropdown.classList.add("hidden");
    });

    // Handle language selection
    languageOptions.forEach(option => {
        option.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default anchor behavior
            const selectedLanguage = option.getAttribute("data-lang");
            const selectedText = option.textContent.trim();

            // Update button text to show the selected language
            buttonText.textContent = selectedText;

            // Store the selected language in local storage
            localStorage.setItem("selectedLanguage", selectedLanguage);

            // Update the page content
            updateLanguage(selectedLanguage);

            // Hide the dropdown
            dropdown.classList.add("hidden");

            console.log("Language changed to:", selectedLanguage); // Debugging
        });
    });

    // Load the selected language from local storage if available
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
        const storedOption = [...languageOptions].find(opt => opt.getAttribute("data-lang") === storedLanguage);
        if (storedOption) {
            buttonText.textContent = storedOption.textContent.trim();
            updateLanguage(storedLanguage); // Update content based on stored language
        }
    }
});