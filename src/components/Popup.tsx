export default function HelloWorld() {
  const getCurrentTab = async () => {
    let queryOptions = {active : true, lastFocusedWindow : true};
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab
  }
  
  const handleClick = async () => {
    const tab = await getCurrentTab();
    console.log(tab);
    if (tab.id !== undefined) {
      const res = chrome.tabs.sendMessage(tab.id, "extract")

    }
  }
  return (
    <>
      <button onClick={handleClick} className="text-xl m-5 border-2 ">Enable Scanning</button>
    </>
  )
}
