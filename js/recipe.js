function updateServes(serves) {

        document.getElementById("serveCount").innerHTML = serves;

        let multiplier = serves / 2;

        let quantities = document.querySelectorAll(".qty");

        quantities.forEach(function(item) {

            let baseAmount = item.dataset.base;

            item.innerHTML = baseAmount * multiplier;
        });
    }



    // Selects all ingredient checkboxes
    const checkboxes = document.querySelectorAll(".ingredients input[type='checkbox']");

    // Selects the shopping list area
    const shoppingList = document.getElementById("shoppingList");

    // Updates the shopping list based on unticked ingredients
    function updateShoppingList() {
        shoppingList.innerHTML = "";

        checkboxes.forEach(function(checkbox) {
            
            // Adds unticked ingredients to the shopping list
            if (!checkbox.checked) {
                const item = document.createElement("li");
                item.textContent = checkbox.parentElement.textContent.trim();
                shoppingList.appendChild(item);
            }
        });
    }

    // Detects when ingredient checkboxes are changed
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function() {
            const label = checkbox.parentElement;

            if (checkbox.checked) {
                label.classList.add("checked");
            } else {
                label.classList.remove("checked");
            }

            updateShoppingList();
        });
    });

    // Loads shopping list when page first opens
    updateShoppingList();

    // Shares shopping list using device sharing tools
    function shareList() {
        const items = document.querySelectorAll("#shoppingList li");
        let text = "My Singapore Noodle Shopping List:\n\n";

        items.forEach(item => {
            text += "- " + item.innerText + "\n";
        });

        // Uses browser share feature if supported
        if (navigator.share) {
            navigator.share({
                title: "Shopping List",
                text: text
            });

        } else {

            // Displays popup if sharing is unavailable
            alert(text);
        }
    }