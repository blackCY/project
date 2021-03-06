/**
 * 处理路由页面切换时，异步组件加载过渡的处理函数
 * @param  {Object} AsyncView 需要加载的组件
 * @return {Object} 返回一个 promise 对象
 */
export default function lazyLoadView(AsyncView, loadingComponent = '', errorComponent = '', timeout) {
  const AsyncHandler = () => ({
    // 需要加载的组件 (应该是一个 `Promise` 对象)
    component: AsyncView,
    // 异步组件加载时使用的组件
    loading: loadingComponent,
    // 加载失败时使用的组件
    error: errorComponent,
    // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    delay: 200,
    // 如果提供了超时时间且组件加载也超时了，
    // 则使用加载失败时使用的组件。默认值是：`Infinity`
    timeout: timeout || Infinity,
  });
  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      return h(AsyncHandler, data, children);
    },
  });
}
