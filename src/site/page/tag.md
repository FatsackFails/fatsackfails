---
title: Tagged
subtitle: Tagged Under
slug: tags
image_card:
image_card_alt:
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
  - all
  - archive
  - blog
  - video
  - nav
  - page
  - posts
  - tagList
  addAllPagesToCollections: true
eleventyComputed:
  archive_title: >-
    {{ title }} {{ tag }}
  archive_desc: >-
    All posts tagged {{ tag }}
layout: archive.njk
type: core
key: tagged
permalink: /{{ slug }}/{{ tag | slug }}/
---
