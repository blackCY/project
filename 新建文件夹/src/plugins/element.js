import Vue from 'vue';
import { Carousel, CarouselItem, Image, Pagination, Input, Message, Form, FormItem } from 'element-ui';

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Image);
Vue.use(Pagination);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.prototype.$message = Message;
