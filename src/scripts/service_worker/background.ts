chrome.action.onClicked.addListener((tab) => {
    if(tab.id !== undefined){
        chrome.scripting.executeScript({
            target : {tabId : tab.id},
            files : ['src/scripts/content/content.ts']
        })
    }
})