import initVueCompositionApi from './initVueCompositionApi';
import initRouter from './initRouter';
import '../utils/cacheComp';

/**
 * 初始化
 *
 * @export
 * @returns
 */
export default function initVue() {
  const setup = initVueCompositionApi();
  const router = initRouter();

  return {
    setup,
    router,
  };
}
