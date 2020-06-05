import roleRouter from './roleRouter';
import userAgent from '../utils/userAgent';
import pcRouter from './route/pcRouter';
import mobileRouter from './route/mobileRouter';

let defaultRouter = [];

if (userAgent()) {
  defaultRouter = mobileRouter;
  import('../styles/mobile/_index.scss');
  import('amfe-flexible');
} else {
  import('../styles/pc/_index.scss');
  defaultRouter = pcRouter;
}

export default defaultRouter.concat(roleRouter);
