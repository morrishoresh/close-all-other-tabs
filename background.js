browser.action.onClicked.addListener(async (activeTab) => {
  const tabs = await browser.tabs.query({ currentWindow: true });
  const idsToClose = tabs
    .filter((tab) => tab.id !== activeTab.id && !tab.pinned)
    .map((tab) => tab.id);

  if (idsToClose.length > 0) {
    await browser.tabs.remove(idsToClose);
  }
});
