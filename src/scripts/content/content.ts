console.log("Running script");
chrome.runtime.onMessage.addListener((message, sender,sendResponse) => {
    console.log(`Message is ${message}\nSender is ${sender.url}\n ${sendResponse}`)
    const text : string = document.body.innerText
    const segmentedText : string[] = text.split(" ")
    console.log(segmentedText)
})