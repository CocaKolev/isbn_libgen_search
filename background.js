// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === 'searchLibGen') {
//       chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         chrome.tabs.sendMessage(tabs[0].id, { action: 'searchLibGen' });
//       });
//     }
//   });


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'openTab') {
        chrome.tabs.create({ url: request.url });
    }
});
