chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'searchLibGen') {
        const getISBN = () => {
            // Simplified regular expression to look for an ISBN-13 number
            const isbnRegex = /\b(978[\dX]{10})\b/;
            const isbnMatch = document.body.textContent.match(isbnRegex);

            return isbnMatch ? isbnMatch[1] : null;
        };

        const isbn = getISBN();
        //   if (isbn) {
        //     window.location.href = `https://libgen.is/search.php?req=${isbn}`;
        if (isbn) {
            const url = `https://libgen.is/search.php?req=${isbn}`;
            // Open libgen search results in a new tab
            chrome.runtime.sendMessage({ action: 'openTab', url: url });
        } else {
            alert('ISBN not found on this Amazon page.');
        }
    }
});
