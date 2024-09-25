console.log("popup loaded")
output = document.getElementById("result")

// Get reference to the setting element (e.g., select box)
function saveSetting() {
    const settingValue = this.value;
    chrome.storage.sync.set({ 'setting': settingValue }, function() {
        console.log('Setting saved:', settingValue);
        //output.innerHTML = "To apply settings, refresh the page"
    });
}

// Add event listener to save the setting when any radio button is clicked
const radioButtons = document.querySelectorAll('input[name="setting"]');
radioButtons.forEach(button => {
    button.addEventListener('click', saveSetting);
});

// Optionally, load the previously saved setting
chrome.storage.sync.get('setting', function(data) {
    if (data.setting) {
        const selectedButton = document.querySelector(`input[name="setting"][value="${data.setting}"]`);
        if (selectedButton) {
            selectedButton.checked = true;
        }
    }
});
