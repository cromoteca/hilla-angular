const fs = require('node:fs');

// this plugin is a hack to reload components when the html file changes
export default function componentReload(opts = {}) {
  return {
    name: 'component-reload',

    configureServer ({ ws, watcher }) {
        watcher.on('change', (path) => setTimeout(() => {
            // maybe other similar cases will arise
            if (path.endsWith('component.html')) {
                const time = new Date();
                const filename = path.replace(/html$/, 'ts');
                // touch the .ts file
                fs.utimesSync(filename, time, time);
                // trigger a reload
                ws.send({ type: 'full-reload', path: filename });
            }
        }, 500));
    },
  }
}
