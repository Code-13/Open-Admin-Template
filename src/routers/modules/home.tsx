import { RouteObject } from '@/routers/interface';
import Home from '@/views/home';

const columnRouter: Array<RouteObject> = [
  {
    path: '/home',
    element: <Home />,
  },
];

export default columnRouter;
