module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.ts',
      title: 'Popup'
    },
    options: {
      template: 'public/browser-extension.html',
      entry: './src/options/main.ts',
      title: 'Options'
    },
    override: {
      template: 'public/browser-extension.html',
      entry: './src/override/main.ts',
      title: 'Override'
    },
    standalone: {
      template: 'public/browser-extension.html',
      entry: './src/standalone/main.ts',
      title: 'Standalone',
      filename: 'index.html'
    },
    devtools: {
      template: 'public/browser-extension.html',
      entry: './src/devtools/main.ts',
      title: 'Devtools'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.ts'
        },
        contentScripts: {
          entries: {
            'content-script': [
              'src/content-scripts/content-script.ts'
            ]
          }
        }
      }
    }
  }
}
