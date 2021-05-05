---
title: Snippets
subtitle:
image_card:
image_card_alt:
seo_title: Snippets
seo_desc: 
pagination:
  data: collections.snippets
  size: 12
  alias: posts
  addAllPagesToCollections: true
layout: archive.njk
type: core
key: archives
collection: snippets
permalink: "snippets/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---
