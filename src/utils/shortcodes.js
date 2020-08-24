module.exports = {

  /*
   * Breakout Image
   *
   * Definitions:
   * - image: path to file or URL
   * - image_alt: plain text string
   * - height: TailwindCSS class, h-{size}
   *
   * Usage:
   * {% breakoutImage "/images/og.jpg", "An image test", "h-96" %}
   *
   */
  breakoutImage: (image, image_alt, height) => {
    return `<div class="breakout"><img src="${image}" alt="${image_alt}" class="w-full ${height} object-cover" /></div>`;
  },

  cta: (top_text, bottom_text, button_text, button_url) => {
    return `<div class="bg-fspurple-700 rounded">
      <div class="max-w-screen-xl mx-auto p-6 lg:p-10 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 text-fspurple-100 my-0">
          ${top_text}
          <br>
          <span class="text-fspink-600">${bottom_text}</span>
        </h2>
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0 text-fspurple-100 hover:text-fspurple-900">
          <div class="inline-flex rounded-md shadow">
            <a href="${button_url}" class="shadow-md font-medium py-2 px-4 cursor-pointer border-fspink-500 border-4 hover:bg-fspink-500 rounded text-lg text-center w-48 no-underline">
              ${button_text}
            </a>
          </div>
        </div>
      </div>
    </div>`;
  },

  button: (button_text, button_url, target) => {
    return `<a href="${button_url}" ${target} rel="noopener noreferrer" class="h-16 text-fspurple-100 hover:text-fspurple-900 bg-fspurple-700 shadow-md font-medium py-2 px-4 cursor-pointer border-fspink-500 border-4 hover:bg-fspink-500 rounded text-lg text-center w-48 no-underline">
    ${button_text}</a>`;
  },

  buttonIcon: (button_text, button_url, icon, target) => {
    return `<a href="${button_url}" ${target} rel="noopener noreferrer" class="h-16 text-fspurple-100 hover:text-fspurple-900 bg-fspurple-700 shadow-md font-medium py-2 px-4 cursor-pointer border-fspink-500 border-4 hover:bg-fspink-500 rounded text-lg text-center w-48 no-underline">
      <svg class="inline-block h-5 w-5 mr-2" fill="currentColor" role="img" aria-hidden="true">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/icon-library.svg#${icon}"></use>
      </svg>
    ${button_text}</a>`;
  }

}
