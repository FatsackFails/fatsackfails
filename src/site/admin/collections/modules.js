export default {
  name: 'modules',
  label: 'Modules',
  label_singular: 'Module',
  description: 'Configure and customize modules',
  create: false,
  delete: false,
  slug: '{{slug}}',
  preview_path: '{{fields.slug}}',
  editor: {
		preview: false,
	},
  files: [
    {
      label: 'About',
      name: 'about',
      file: 'src/site/page/about.md',
      slug: '{{fields.slug}}',
      preview: true,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
          'default': 'about'
        },
        {
		      label: 'Publish Date',
		      name: 'date',
		      widget: 'datetime',
					date_format: 'yyyy-MM-dd', // e.g. 2022-12-24
					time_format: 'HH:mm', //  e.g. 21:05
					format: 'yyyy-MM-dd', // e.g. 2022-12-24
					default: '',
		    },
        {
          label: 'Last Modified',
          name: 'dateMod',
          widget: 'hidden',
          'default': 'Last Modified'
        },
        {
          label: 'Display Contact Form?',
          name: 'form',
          widget: 'select',
          options: [
            {
              label: 'Yes',
              value: 'yes'
            },
            {
              label: 'No',
              value: 'no'
            }
          ]
        },
        {
          label: 'Turn off this module?',
          name: 'eleventyExcludeFromCollections',
          widget: 'boolean',
          'default': false,
          required: false,
          hint: 'Default is no.'
        },
        {
          label: 'Image Card',
          name: 'image_card',
          widget: 'image',
          required: false,
          media_library: {
            config: {
              multiple: false
            }
          },
          hint: 'Recommended size: 1200×628 pixels'
        },
        {
          label: 'Image Card Alt Text',
          name: 'image_card_alt',
          widget: 'string',
          required: false,
          hint: 'Describe this image for anyone who can\'t see it.'
        },
        {
          label: 'Image Card Credit',
          name: 'image_card_credit',
          widget: 'string',
          required: false,
          hint: 'Give credit where credit is due.'
        },
        {
          label: 'TL;DR',
          name: 'excerpt',
          widget: 'markdown',
          required: false,
	show_raw: true,
          hint: 'A short description of this post for people who don\'t want to read. Shown at the beginning of the post. You can use Markdown!'
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
		show_raw: true
        },
        {
          label: 'SEO Title',
          name: 'seo_title',
          widget: 'string',
          required: false,
          hint: 'A title to display on a Search result. (What do you want Google to see?)'
        },
        {
          label: 'SEO Description',
          name: 'seo_desc',
          widget: 'text',
          required: false,
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'page.njk'
        }
      ]
    },
    {
      label: 'Contact',
      name: 'contact',
      file: 'src/site/page/contact.md',
      slug: '{{fields.slug}}',
      preview: true,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
          'default': 'contact'
        },
        {
		      label: 'Publish Date',
		      name: 'date',
		      widget: 'datetime',
					date_format: 'yyyy-MM-dd', // e.g. 2022-12-24
					time_format: 'HH:mm', //  e.g. 21:05
					format: 'yyyy-MM-dd', // e.g. 2022-12-24
					default: '',
		    },
        {
          label: 'Last Modified',
          name: 'dateMod',
          widget: 'hidden',
          'default': 'Last Modified'
        },
        {
          label: 'Display Contact Form?',
          name: 'form',
          widget: 'select',
          options: [
            {
              label: 'Yes',
              value: 'yes'
            },
            {
              label: 'No',
              value: 'no'
            }
          ]
        },
        {
          label: 'Turn off this module?',
          name: 'eleventyExcludeFromCollections',
          widget: 'boolean',
          'default': false,
          required: false,
          hint: 'Default is no.'
        },
        {
          label: 'Image Card',
          name: 'image_card',
          widget: 'image',
          required: false,
          media_library: {
            config: {
              multiple: false
            }
          },
          hint: 'Recommended size: 1200×628 pixels'
        },
        {
          label: 'Image Card Alt Text',
          name: 'image_card_alt',
          widget: 'string',
          required: false,
          hint: 'Describe this image for anyone who can\'t see it.'
        },
        {
          label: 'Image Card Credit',
          name: 'image_card_credit',
          widget: 'string',
          required: false,
          hint: 'Give credit where credit is due.'
        },
        {
          label: 'TL;DR',
          name: 'excerpt',
          widget: 'markdown',
          required: false,
		show_raw: true,
          hint: 'A short description of this post for people who don\'t want to read. Shown at the beginning of the post. You can use Markdown!'
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
		show_raw: true,
        },
        {
          label: 'SEO Title',
          name: 'seo_title',
          widget: 'string',
          required: false,
          hint: 'A title to display on a Search result. (What do you want Google to see?)'
        },
        {
          label: 'SEO Description',
          name: 'seo_desc',
          widget: 'text',
          required: false,
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'page.njk'
        }
      ]
    },
    {
      label: 'Privacy Policy',
      name: 'privacy',
      file: 'src/site/page/privacy-policy.md',
      slug: '{{fields.slug}}',
      preview: true,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
		      label: 'Effective Date',
		      name: 'date',
		      widget: 'datetime',
					date_format: 'yyyy-MM-dd', // e.g. 2022-12-24
					time_format: 'HH:mm', //  e.g. 21:05
					format: 'yyyy-MM-dd', // e.g. 2022-12-24
					default: '',
		    },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          'default': 'privacy'
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
		show_raw: true,
        },
        {
          label: 'SEO Title',
          name: 'seo_title',
          widget: 'string',
          required: false,
          hint: 'A title to display on a Search result. (What do you want Google to see?)'
        },
        {
          label: 'SEO Description',
          name: 'seo_desc',
          widget: 'text',
          required: false,
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'privacy.njk'
        }
      ]
    },
    {
      label: 'Search',
      name: 'search',
      file: 'src/site/page/search.md',
      slug: '{{fields.slug}}',
      preview: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          'default': 'search'
        },
        {
		      label: 'Publish Date',
		      name: 'date',
		      widget: 'datetime',
					date_format: 'yyyy-MM-dd', // e.g. 2022-12-24
					time_format: 'HH:mm', //  e.g. 21:05
					format: 'yyyy-MM-dd', // e.g. 2022-12-24
					default: '',
		    },
        {
          label: 'Last Modified',
          name: 'dateMod',
          widget: 'hidden',
          'default': 'Last Modified'
        },
        {
          label: 'Image Card',
          name: 'image_card',
          widget: 'image',
          required: false,
          media_library: {
            config: {
              multiple: false
            }
          },
          hint: 'Recommended size: 1200×628 pixels'
        },
        {
          label: 'Image Card Alt Text',
          name: 'image_card_alt',
          widget: 'string',
          required: false,
          hint: 'Describe this image for anyone who can\'t see it.'
        },
        {
          label: 'Search Form Text',
          name: 'heading_form',
          widget: 'string',
          required: false,
          hint: 'What text should go before the search box?'
        },
        {
          label: 'Tag List Text',
          name: 'heading_tags',
          widget: 'string',
          required: false,
          hint: 'What text should go before the tag list?'
        },
        {
          label: 'SEO Title',
          name: 'seo_title',
          widget: 'string',
          required: false,
          hint: 'A title to display on a Search result. (What do you want Google to see?)'
        },
        {
          label: 'SEO Description',
          name: 'seo_desc',
          widget: 'text',
          required: false,
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'search.njk'
        }
      ]
    },
    {
      label: 'Posts - Collection',
      name: 'post_page',
      file: 'src/site/page/posts.md',
      slug: '{{fields.slug}}',
      preview: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          'default': 'posts'
        },
        {
          label: 'Image Card',
          name: 'image_card',
          widget: 'image',
          required: false,
          media_library: {
            config: {
              multiple: false
            }
          },
          hint: 'Recommended size: 1200×628 pixels'
        },
        {
          label: 'Image Card Alt Text',
          name: 'image_card_alt',
          widget: 'string',
          required: false,
          hint: 'Describe this image for anyone who can\'t see it.'
        },
        {
          label: 'SEO Title',
          name: 'seo_title',
          widget: 'string',
          required: false,
          hint: 'A title to display on a Search result. (What do you want Google to see?)'
        },
        {
          label: 'SEO Description',
          name: 'seo_desc',
          widget: 'text',
          required: false,
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'archive.njk'
        }
      ]
    },
    {
      label: 'Category - Single',
      name: 'category',
      file: 'src/site/page/category.md',
      slug: '{{fields.slug}}',
      preview: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'hidden'
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          'default': 'category'
        },
        {
          label: 'Image Card',
          name: 'image_card',
          widget: 'image',
          required: false,
          media_library: {
            config: {
              multiple: false
            }
          },
          hint: 'Recommended size: 1200×628 pixels'
        },
        {
          label: 'Image Card Alt Text',
          name: 'image_card_alt',
          widget: 'string',
          required: false,
          hint: 'Describe this image for anyone who can\'t see it.'
        },
        {
          label: 'SEO Title',
          name: 'seo_title',
          widget: 'string',
          required: false,
          hint: 'A title to display on a Search result. (What do you want Google to see?)'
        },
        {
          label: 'SEO Description',
          name: 'seo_desc',
          widget: 'text',
          required: false,
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'archive.njk'
        }
      ]
    },
    {
      label: 'Category - Collection',
      name: 'categories',
      file: 'src/site/page/categories.md',
      slug: '{{fields.slug}}',
      preview: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          'default': 'category'
        },
        {
          label: 'Image Card',
          name: 'image_card',
          widget: 'image',
          required: false,
          media_library: {
            config: {
              multiple: false
            }
          },
          hint: 'Recommended size: 1200×628 pixels'
        },
        {
          label: 'Image Card Alt Text',
          name: 'image_card_alt',
          widget: 'string',
          required: false,
          hint: 'Describe this image for anyone who can\'t see it.'
        },
        {
          label: 'SEO Title',
          name: 'seo_title',
          widget: 'string',
          required: false,
          hint: 'A title to display on a Search result. (What do you want Google to see?)'
        },
        {
          label: 'SEO Description',
          name: 'seo_desc',
          widget: 'text',
          required: false,
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'tags.njk'
        }
      ]
    },
    {
      label: 'Tag - Single',
      name: 'tag',
      file: 'src/site/page/tag.md',
      slug: '{{fields.slug}}',
      preview: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
          'default': 'tags'
        },
        {
          label: 'Image Card',
          name: 'image_card',
          widget: 'image',
          required: false,
          media_library: {
            config: {
              multiple: false
            }
          },
          hint: 'Recommended size: 1200×628 pixels'
        },
        {
          label: 'Image Card Alt Text',
          name: 'image_card_alt',
          widget: 'string',
          required: false,
          hint: 'Describe this image for anyone who can\'t see it.'
        },
        {
          label: 'SEO Title',
          name: 'seo_title',
          widget: 'string',
          required: false,
          hint: 'A title to display on a Search result. (What do you want Google to see?)'
        },
        {
          label: 'SEO Description',
          name: 'seo_desc',
          widget: 'text',
          required: false,
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'archive.njk'
        }
      ]
    },
    {
      label: 'Tag - Collection',
      name: 'tags',
      file: 'src/site/page/tags.md',
      slug: '{{fields.slug}}',
      preview: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
          'default': 'tags'
        },
        {
          label: 'Image Card',
          name: 'image_card',
          widget: 'image',
          required: false,
          media_library: {
            config: {
              multiple: false
            }
          },
          hint: 'Recommended size: 1200×628 pixels'
        },
        {
          label: 'Image Card Alt Text',
          name: 'image_card_alt',
          widget: 'string',
          required: false,
          hint: 'Describe this image for anyone who can\'t see it.'
        },
        {
          label: 'SEO Title',
          name: 'seo_title',
          widget: 'string',
          required: false,
          hint: 'A title to display on a Search result. (What do you want Google to see?)'
        },
        {
          label: 'SEO Description',
          name: 'seo_desc',
          widget: 'text',
          required: false,
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': 'tags.njk'
        }
      ]
    },
    {
      label: '404 Page',
      name: '404_page',
      file: 'src/site/page/404.md',
      slug: '{{fields.slug}}',
      preview: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          'default': '404'
        },
        {
		      label: 'Publish Date',
		      name: 'date',
		      widget: 'datetime',
					date_format: 'yyyy-MM-dd', // e.g. 2022-12-24
					time_format: 'HH:mm', //  e.g. 21:05
					format: 'yyyy-MM-dd', // e.g. 2022-12-24
					default: '',
		    },
        {
          label: 'Last Modified',
          name: 'dateMod',
          widget: 'hidden',
          'default': 'Last Modified'
        },
        {
          label: 'Image Card',
          name: 'image_card',
          widget: 'image',
          required: false,
          media_library: {
            config: {
              multiple: false
            }
          },
          hint: 'Recommended size: 1200×628 pixels'
        },
        {
          label: 'Image Card Alt Text',
          name: 'image_card_alt',
          widget: 'string',
          required: false,
          hint: 'Describe this image for anyone who can\'t see it.'
        },
        {
          label: 'Search Form Text',
          name: 'heading_form',
          widget: 'string',
          required: false,
          hint: 'What text should go before the search box?'
        },
        {
          label: 'Tag List Text',
          name: 'heading_tags',
          widget: 'string',
          required: false,
          hint: 'What text should go before the tag list?'
        },
        {
          label: 'SEO Title',
          name: 'seo_title',
          widget: 'string',
          required: false,
          hint: 'A title to display on a Search result. (What do you want Google to see?)'
        },
        {
          label: 'SEO Description',
          name: 'seo_desc',
          widget: 'text',
          required: false,
          hint: 'A short description to tease this in a Search or Social Media preview.',
          pattern: [
            '.{,240}',
            'Max 240 characters'
          ]
        },
        {
          label: 'Template',
          name: 'layout',
          widget: 'hidden',
          'default': '404.njk'
        }
      ]
    }
  ]
}
