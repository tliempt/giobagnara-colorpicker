document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("languageSelector");
    const productTitle = document.getElementById("productTitle");
    const productDescription = document.getElementById("productDescription");

    // Language translations
    const translations = {
        en: {
            title: "Square Tray - Polo",
            description: "A premium square tray, perfect for elegant presentations. Crafted with fine materials and a sleek design, this tray adds a touch of luxury to any space."
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
    function updateLanguage() {
        const selectedLang = languageSelector.value;
        if (translations[selectedLang]) {
            productTitle.textContent = translations[selectedLang].title;
            productDescription.textContent = translations[selectedLang].description;
        }
    }

    // Event listener for language change
    languageSelector.addEventListener("change", updateLanguage);
});
