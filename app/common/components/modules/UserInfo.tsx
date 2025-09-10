import { UserRound, LogOut } from 'lucide-react';
import { Link } from 'react-router';

type UserInfoProps = {
  className?: string;
};

export default function UserInfo({ className = '' }: UserInfoProps) {
  return (
    <div className={`inline-flex justify-end items-center gap-4 ${className}`}>
      <div className="py-1 rounded-3xl flex justify-center items-center gap-2.5">
        <UserRound size={16} className={'text-blue-500'} />
        <strong>김글빗</strong> 님 환영합니다.
      </div>
      <button
        type={'button'}
        className={
          'hidden lg:flex justify-center items-center p-2 hover:bg-blue-50 rounded-xl'
        }
      >
        <LogOut size={24} className="text-slate-800" />
      </button>
    </div>
  );
}
