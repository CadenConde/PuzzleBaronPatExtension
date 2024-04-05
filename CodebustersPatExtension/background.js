chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("cryptograms.puzzlebaron.com/play.php")) {
    }
  });
  