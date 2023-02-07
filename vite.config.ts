import analog from '@analogjs/platform';
import { UserConfigFn } from 'vite';
import componentReload from './component-reload';
import { overrideVaadinConfig } from './vite.generated';

const customConfig: UserConfigFn = (env) => ({
  // Here you can add custom Vite parameters
  // https://vitejs.dev/config/
  plugins: [
    analog(),
    componentReload(),
  ],
});

export default overrideVaadinConfig(customConfig);
