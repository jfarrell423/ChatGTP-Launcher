chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    url: "https://chatgpt.com/",
    type: "popup",
    width: 1200,
    height: 800
  });
});
