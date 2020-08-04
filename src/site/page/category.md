---
title: Category
subtitle: Categorized Under
slug: category
image_card:
image_card_alt:
pagination:
  data: collections.category
  size: 1
  alias: category
  addAllPagesToCollections: true
eleventyComputed:
  archive_title: >-
    {{ subtitle }} "{{ category }}"
  archive_desc: >-
    All posts categorized {{ category }}
layout: archive.njk
type: core
key: categorized
permalink: /{{ slug }}/{{ category | slug }}/
---
