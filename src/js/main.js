import $ from 'jquery'
// Adiciona scrollspy na navbar secundária

const onHashChange = _ => {
  const classTarget = window.location.hash.substr(1)
  const $target = $(`.js-scroll-${classTarget}`)

  if ($target.length > 0) {
    $('html, body').animate({ scrollTop: $target.offset().top }, 800)
  }
}

// $(window).on('hashchange', onHashChange)
if ($('#spy').length > 0) {
  $(_ => {
    onHashChange()

    $('body').scrollspy({
      target: '#spy',
      offset: 70
    })
    // Add smooth scrolling on all links inside the navbar
    $('.nav-item a').on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== '') {
        // Prevent default anchor click behavior
        event.preventDefault()
        // Store hash
        var hash = this.hash
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({ scrollTop: $(hash).offset().top }, 800, function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash
        })
      } // End if
    })
  })
}
