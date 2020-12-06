import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const name = browser.i18n.getMessage('extName');
browser.devtools.panels.create(name, '', 'devtools.html'); // use "browser" instead of "chrome" for correct typings
// chrome.devtools.panels.create(name, '', 'devtools.html');
