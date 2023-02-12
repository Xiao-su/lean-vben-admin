
import type { AppRouteRecordRaw } from '/@/router/types';
import { PageEnum } from '/@/enums/pageEnum';


import { PAGE_NOT_FOUND_ROUTE } from '/@/router/routes/basic';


// 根路由
export const RootRoute: AppRouteRecordRaw = {
    path: '/',
    name: 'Root',
    redirect: PageEnum.BASE_HOME,
    meta: {
      title: 'Root',
    },
  };

// Basic routing without permission
// 未经许可的基本路由
export const basicRoutes = [
    // LoginRoute,
    RootRoute,
    // ...mainOutRoutes,
    // REDIRECT_ROUTE,
    PAGE_NOT_FOUND_ROUTE,
];