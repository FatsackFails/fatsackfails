// Import Locale if not English
// TODO: import, export, and register locale as defined in _data/site.json
// import { en } from 'netlify-cms-locales';

// Import Collections
import post from './collections/post.js';
import tabletop from './collections/tabletop.js';
import snippet from './collections/snippets.js';
import page from './collections/page.js';
import modules from './collections/modules.js';
import linkInBio from './collections/linkinbio.js';
import settings from './collections/settings.js';
import custom from './collections/custom.js';

export default {
  backend: {
    name: 'git-gateway',
    branch: 'master'
  },
  local_backend: true,
	load_config_file: false,
	media_folder: 'images',
	public_folder: '/images',
  site_url: `${window.location.protocol}//${window.location.host}`,
  display_url: `${window.location.protocol}//${window.location.host}`,
  logo_url: `${window.location.protocol}//${window.location.host}/images/f-plus-logo-pink.png`,
	show_preview_links: true,
	slug: {
		encoding: 'ascii',
		clean_accents: true,
		sanitize_replacement: '-',
	},
  collections: [
    post,
    tabletop,
    snippet,
    page,
    modules,
    linkInBio,
    settings,
    custom
  ]
}
