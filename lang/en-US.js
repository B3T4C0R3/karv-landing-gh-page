export default () => {
  return new Promise(function(resolve) {
    resolve({
      common: {
        '404': 'This page was not found',
        title: 'A simple example',
        subtitle: "It's a blank-page. Start to build your'e page from here.",
        error_with_status: 'Something went wrong',
        '404_subtitle': 'You can stay here or go back to the homepage.',
        back: 'Back to home',
        error_without_status: 'An error occurred on the server',
        cookies_accept: 'Accept',
        cookies: 'We use cookies to optimize your experience. Read',
        cookies2: 'more',
        cookies3: '.',
        en: 'English',
        nl: 'Dutch',
        created_by: 'Made by'
      },
      karv: {}
    })
  })
}
