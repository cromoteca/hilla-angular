import { UserConfigFn } from 'vite';
import { overrideVaadinConfig } from './vite.generated';
import analog from '@analogjs/platform';
import componentReload from './component-reload';

const customConfig: UserConfigFn = (env) => ({
  // Here you can add custom Vite parameters
  // https://vitejs.dev/config/
  plugins: [analog(), componentReload()],
});

export default overrideVaadinConfig(customConfig);
