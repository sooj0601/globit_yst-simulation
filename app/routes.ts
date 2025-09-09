import {
  type RouteConfig,
  index,
  prefix,
  route,
} from '@react-router/dev/routes';

export default [
  // MARK: - 메인(랜딩) 페이지
  index('common/pages/home.tsx'),
  // MARK: - 입/출하 계획
  ...prefix('simulation', [
    route('', 'features/simulation/pages/manager.tsx'),
    route('schedule', 'features/simulation/pages/schedule.tsx'),
    route('plan', 'features/simulation/pages/plan.tsx'),
    route('data', 'features/simulation/pages/data.tsx'),
  ]),

] satisfies RouteConfig;
