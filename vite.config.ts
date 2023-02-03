import { UserConfigFn } from 'vite';
import { overrideVaadinConfig } from './vite.generated';
import analog from '@analogjs/platform';

const customConfig: UserConfigFn = (env) => ({
  // Here you can add custom Vite parameters
  // https://vitejs.dev/config/
  plugins: [analog()],
});

export default overrideVaadinConfig(customConfig);
