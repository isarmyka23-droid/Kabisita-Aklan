document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("#town-search");
    const count = document.querySelector("#town-count");
    const municipalitySection = [...document.querySelectorAll("main section")]
        .find((section =>
                section.querySelector("h2")?.textContent.includes("Municipalities")
        ));

    if (!searchInput || !count || !municipalitySection) return;

    const cards = [...municipalitySection.querySelectorAll("article")];

    function filterMunicipalities() {
        const query = searchInput.value.trim().toLocaleLowerCase();
        let visible = 0;

        cards.forEach((card) => {
            const matches = card.textContent.toLocaleLowerCase().includes(query);
            card.hidden = !matches;
            if (matches) visible += 1;
        });

        count.textContent = query
            ? `Showing ${visible} of ${cards.length} municipalities`
            : `Showing all ${cards.length} municipalities`;
    }

    searchInput.addEventListener("input", filterMunicipalities);
});