class WebAppManifest {
  data() {
    return {
      permalink: "/site.webmanifest"
    };
  }

  render(data) {
    const tailwind = require('../../../tailwind.config.js');
    const mainColor = tailwind.theme.extend.colors[data.theme.colors.main]['700'];

    const content = {
      "short_name": data.site.name,
      "name": data.site.name,
      "description": "Weather forecast information",
      "icons": [
        {
          "src": data.site.favicon,
          "type": "image/png",
          "sizes": "512x512"
        }
      ],
      "theme_color": mainColor,
      "background_color": mainColor,
      "display": "standalone",
      "start_url": "/",
      "scope": "/"
    };
    return JSON.stringify(content);
  }
}

module.exports = WebAppManifest;
