function extractAgencyData() {
    let cards = document.querySelectorAll(".card");
    let data = [];

    cards.forEach(card => {
        try {
            let name = card.querySelector(".card-title > a")?.innerText.trim() || "";
            let manager = card.querySelector(".card-title .category")?.innerText.replace("Responsible manager:", "").trim() || "";

            let content = card.querySelector(".card-content");
            let contentHtml = content.innerHTML;

            const getField = (label) => {
                const regex = new RegExp(`<b>${label}:<\\/b>\\s*(.*?)<br>`, 'i');
                let match = contentHtml.match(regex);
                return match ? match[1].replace(/<.*?>/g, "").trim() : "";
            };

            let phone = getField('Phone');
            let contactPerson = getField('The contact person');
            let website = getField('Website');
            let commission = getField('Comission');
            let objects = getField('Objects');

            let leadsLink = content.querySelector(".agency-link")?.value.trim() || "";

            data.push({
                name, manager, phone, contactPerson, website, commission, objects, leadsLink
            });
        } catch (error) {
            console.error('Error parsing card:', card, error);
        }
    });

    return data;
}

const agencyData = extractAgencyData();
console.table(agencyData);  // visually check extracted data
copy(agencyData);           // copy the data to clipboard
