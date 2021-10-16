const filter = {
    url: [
      {
        urlMatches: 'https://cointelegraph.com/',
      },
    ],
  };
  chrome.webNavigation.onCompleted.addListener(() => {
    action.setIcon({imageData: "/images/coin-telegraph-icon.png"});
  }, filter);