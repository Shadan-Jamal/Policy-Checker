import { defineManifest } from '@crxjs/vite-plugin'
import pkg from './package.json'

export default defineManifest({
  manifest_version: 3,
  name: pkg.name,
  version: pkg.version,
  icons: {
    48: 'public/logo.png',
  },
  permissions : ['activeTab', 'storage', 'scripting', 'tabs'],
  action: {
    default_icon: {
      48: 'public/logo.png',
    },
    default_popup: 'src/popup/index.html',
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/scripts/content/content.ts'],
    },
  ],
  background : {
    service_worker : "src/scripts/service_worker/background.ts",
    type : "module"
  }
})
