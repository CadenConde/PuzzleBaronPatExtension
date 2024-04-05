(() => {
    console.log("Code is running!")
    
    const words = document.querySelectorAll(".word")
    for (let i = 0; i < words.length; i++) {
        words[i].style.marginRight = "0px";
        words[i].style.padding = "0px";
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
        punctation[i].parentElement.remove();
    }
})();