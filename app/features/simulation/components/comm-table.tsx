import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';

export function CommTable({
    className = '',
    children,
  }: {
  className?: string;
  children?: React.ReactNode;
}) {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right' | 'up' | 'down') => {
    const container = tableContainerRef.current;
    if (!container) return;

    const amount = 200;
    if (direction === 'left') container.scrollBy({ left: -amount, behavior: 'smooth' });
    if (direction === 'right') container.scrollBy({ left: amount, behavior: 'smooth' });
    if (direction === 'up') container.scrollBy({ top: -amount, behavior: 'smooth' });
    if (direction === 'down') container.scrollBy({ top: amount, behavior: 'smooth' });
  };
  return (
    <div className={`relative lg:pb-12 ${className}`}>
      {/* 가로 스크롤 화살표 */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-2 z-24">
        <button onClick={() => scroll('left')} className="w-10 h-10 flex items-center justify-center cursor-pointer hover:text-slate-800 text-slate-500">
          <ChevronLeft size={32}/>
        </button>
        <span className="w-[2px] h-4 bg-slate-300"></span>
        <button onClick={() => scroll('right')} className="w-10 h-10 flex items-center justify-center cursor-pointer hover:text-slate-800 text-slate-500">
          <ChevronRight size={32}/>
        </button>
      </div>
      <div ref={tableContainerRef} className="relative w-full overflow-x-auto overflow-y-auto rounded-2xl">
        <table className={`relative w-max table-fixed border-collapse ${className}`}>
          {children}
        </table>
      </div>
    </div>
  );
}

export function CommTableHead({ className = '', children}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <thead className={`sticky top-0 bg-slate-600 z-10 ${className}`}>
      {children}
    </thead>
  );
}

type CommTableThProps = React.ThHTMLAttributes<HTMLTableCellElement> & {
  className?: string;
  children?: React.ReactNode;
};
export function CommTableTh({
    className = '',
    children,
    ...props
  }: CommTableThProps) {
  return (
    <th
      className={`p-2 text-white text-sm text-nowrap ${className}`}
      {...props}
    >
      {children}
    </th>
  );
}
type CommTableTdProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
  bgColor?: boolean;
  className?: string;
};

export function CommTableTd({
    className = '',
    children,
    ...props
  }: CommTableTdProps) {


  return (
    <td
      className={`border-b border-b-slate-300 py-2 px-2 text-center bg-slate-50 ${className}`}
      {...props}
    >
      {children}
    </td>
  );
}

export function CommTableFoot({ className = '', children}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <tfoot className={`sticky bottom-0 bg-blue-200/40 z-10 backdrop-blur-sm ${className}`}>
      {children}
    </tfoot>
  );
}


