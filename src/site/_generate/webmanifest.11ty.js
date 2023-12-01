class WebAppManifest {
  data() {
    return {
      permalink: "/site.webmanifest"
    };
  }

  render(data) {

    const content = {
      "short_name": data.site.name,
      "name": data.site.name,
      "description": data.site.description,
      "icons": [
        {
          "src": data.site.favicon,
          "type": "image/png",
          "sizes": "512x512",
          purpose: 'any maskable',
        }
      ],
      "theme_color": "#2F2149",
      "background_color":  "#2F2149",
      "display": "standalone",
      "start_url": "/",
      "scope": "/"
    };
    return JSON.stringify(content);
  }
}

module.exports = WebAppManifest;
