import NavItem from '~/common/components/ui/layout/NavItem';

type NavProps = {
  className?: string;
};

export default function Nav({ className = '' }: NavProps) {
  return (
    <nav className={`flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-0 ${className}`} role="navigation" aria-label="메인 메뉴">

      <NavItem
        label="입・출하 관리"
        to="/simulation"
        // subMenu={[
        //   { label: '입・출하계획', to: '/simulation' },
        //   { label: '입・출하계획 수익 분석표', to: '/simulation/data' },
        // ]}
      />
      <NavItem
        label="입・출하 계획 수익 분석표"
        to="/simulation/data"
      />
    </nav>
  );
}
