(() => {
    let setting = "Default"
    chrome.storage.onChanged.addListener(handleChange);

    //Handle settings update
    chrome.storage.sync.get('setting', function(data) {
        if (data.setting) {
            setting = data.setting
            console.log("Setting:" + setting)
            applyPat();
        }
    });

    function applyPat() {
        const words = document.querySelectorAll(".word")

        //remove words and punctuation
        if (setting == "Patri") { 
            
            for (let i = 0; i < words.length; i++) {
                words[i].style.marginRight = "0px";
                words[i].style.padding = "0px";
                words[i].style.paddingBottom = "10px";
                child = words[i].querySelector('table')
                child.style.all = "unset";
                child.style.cellPadding = "2px";
                child2 = child.querySelectorAll('td');
                for (let i = 0; i < child2.length; i++) {
                    child2[i].style.padding = "3px";
                }
            }

            const punctation = document.querySelectorAll(".symbol")
            for (let i = 0; i < punctation.length; i++) {
                punctation[i].parentElement.style.display = "none";
            }
        }

        //re-add words and punctuation
        else{
            for (let i = 0; i < words.length; i++) {
                words[i].style.marginRight = "12px";
                words[i].style.padding = "4px";
                child = words[i].querySelector('table')
                child.style.borderSpacing = "2px";
                child2 = child.querySelectorAll('td');
                for (let i = 0; i < child2.length; i++) {
                    child2[i].style.paddingLeft = "1px";
                    child2[i].style.paddingRight = "1px";
                }
            }
            const punctation = document.querySelectorAll(".symbol")
            for (let i = 0; i < punctation.length; i++) {
                punctation[i].parentElement.style.display = "initial";
            }
        }
    }

    function handleChange(changes, namespace) {
        console.log("i ran")
        chrome.storage.sync.get('setting', function(data) {
            if (data.setting) {
                setting = data.setting
                console.log("Setting:" + setting)
                applyPat();
            }
        });
    }
})();