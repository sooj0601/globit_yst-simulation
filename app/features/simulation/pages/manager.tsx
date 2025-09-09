import Container from '~/common/layouts/Container';
import ModuleWrap from '~/features/simulation/components/module-wrap';

import PageTitle from "~/common/components/ui/layout/PageTitle";
import {Calendar, Plus, CircleAlert} from "lucide-react";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import GroupItem from "~/features/simulation/components/group-item";
import Input from "~/common/components/ui/form/Input";
import {InfoSet, InfoGroup} from "~/features/simulation/components/info-set";
import ColorSelect from "~/features/simulation/components/color-select";
import {useState} from "react";
import FarmSelect from "~/common/components/modules/FarmSelect";

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <>
      <PageTitle title="입・출하 관리" desc="출하 계획 수립 가능한 입식 그룹 목록을 조회/추가한 뒤 계획을 수립할 수 있습니다." />
      <Container>
        <ModuleWrap title="입식 그룹 목록" desc={<CustomBtn to="/simulation/plan" rightIcon={<Calendar size={16}/>}>입출하 계획</CustomBtn>}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 bg-slate-100 rounded-2xl p-4">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center text-slate-500">
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 border-2 border-dotted border-slate-500 rounded"></div>
                  <strong>실제 입식 그룹</strong>
                </div>
                <span>실제 입식 그룹은 양식일지 포털과 연동 되는 현재 양식장에 실 입하된 입하군 입니다.</span>
              </div>
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center text-slate-500">
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 border-2 border-slate-500 rounded"></div>
                  <strong>계획 입식 그룹</strong>
                </div>
                <span>실제 입식 그룹은 양식일지 포털과 연동 되는 현재 양식장에 실 입하된 입하군 입니다.</span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center lg:justify-between">
              <FarmSelect className="ml-auto" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6">
              <GroupItem groupName="20250503-넙치-1" colorName="violet" state="active">
                <InfoGroup className="w-full grid grid-cols-2">
                  <InfoSet variant="row" label="입식일자" className="col-span-2 md:col-span-1">
                    <p>2025-05-03</p>
                  </InfoSet>
                  <InfoSet label="입식 마리 수">
                    <p>00 마리</p>
                  </InfoSet>
                  <InfoSet label="평균체중">
                    <p>1.2kg</p>
                  </InfoSet>
                  <InfoSet label="구입 금액" className="col-span-2 md:col-span-1">
                    <p>23,000,000원</p>
                  </InfoSet>
                </InfoGroup>
              </GroupItem>
              <GroupItem groupName="20250503-넙치-1" colorName="violet" state="plan" mode="edit">
                <InfoGroup className="w-full grid grid-cols-2">
                  <InfoSet variant="row" label="입식일자" className="col-span-2 md:col-span-1">
                    <Input
                      id="date-pick"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="md:w-40"
                    />
                  </InfoSet>
                  <InfoSet label="입식 마리 수" className="col-span-2 md:col-span-1">
                    <Input type="text" unit="마리" number className="grow" defaultValue="00" />
                  </InfoSet>
                  <InfoSet label="평균체중" className="col-span-2 md:col-span-1">
                    <Input type="text" unit="kg" number className="grow" defaultValue="1.2" />
                  </InfoSet>
                  <InfoSet label="구입 금액" className="col-span-2 md:col-span-1">
                    <Input type="text" unit="원" number className="grow" defaultValue="23,000,000" />
                  </InfoSet>
                </InfoGroup>
              </GroupItem>
              <GroupItem groupName="20250503-넙치-1" colorName="lime" state="active">
                <InfoGroup className="w-full grid grid-cols-2">
                  <InfoSet variant="row" label="입식일자" className="col-span-2 md:col-span-1">
                    <p>2025-05-03</p>
                  </InfoSet>
                  <InfoSet label="입식 마리 수">
                    <p>00 마리</p>
                  </InfoSet>
                  <InfoSet label="평균체중">
                    <p>1.2kg</p>
                  </InfoSet>
                  <InfoSet label="구입 금액" className="col-span-2 md:col-span-1">
                    <p>23,000,000원</p>
                  </InfoSet>
                </InfoGroup>
              </GroupItem>
              <GroupItem groupName="20250503-넙치-1" colorName="pink" state="plan" mode="edit">
                <InfoGroup className="w-full grid grid-cols-2">
                  <InfoSet variant="row" label="입식일자" className="col-span-2 md:col-span-1">
                    <Input
                      id="date-pick"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="md:w-40"
                    />
                  </InfoSet>
                  <InfoSet label="입식 마리 수" className="col-span-2 md:col-span-1">
                    <Input type="text" unit="마리" number className="grow" defaultValue="00" />
                  </InfoSet>
                  <InfoSet label="평균체중" className="col-span-2 md:col-span-1">
                    <Input type="text" unit="kg" number className="grow" defaultValue="1.2" />
                  </InfoSet>
                  <InfoSet label="구입 금액" className="col-span-2 md:col-span-1">
                    <Input type="text" unit="원" number className="grow" defaultValue="23,000,000" />
                  </InfoSet>
                </InfoGroup>
              </GroupItem>
              <GroupItem groupName="20250503-넙치-1" mode="create">
                <InfoGroup className="w-full grid grid-cols-2">
                  <InfoSet variant="row" label="입식일자" className="col-span-2 md:col-span-1">
                    <Input
                      id="date-pick"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="md:w-40"
                    />
                  </InfoSet>
                  <InfoSet label="어종" className="col-span-2 md:col-span-1">
                    <Input type="text" unit="%" number className="grow" defaultValue="11" />
                  </InfoSet>
                  <InfoSet label="입식 마리 수" className="col-span-2 md:col-span-1">
                    <Input type="text" unit="마리" number className="grow" defaultValue="00" />
                  </InfoSet>
                  <InfoSet label="평균체중" className="col-span-2 md:col-span-1">
                    <Input type="text" unit="kg" number className="grow" defaultValue="1.2" />
                  </InfoSet>
                  <InfoSet label="구입 금액" className="col-span-2 md:col-span-1">
                    <Input type="text" unit="원" number className="grow" defaultValue="23,000,000" />
                  </InfoSet>
                  <InfoSet label="고유색상" className="col-span-2">
                    <ColorSelect errors="이미 해당 색상에 배정된 입식 그룹이 있습니다."/>
                  </InfoSet>
                </InfoGroup>
                <div className="flex flex-col gap-2 pt-4 md:pt-2 md:flex-row md:justify-between md:items-center items-stretch w-full">
                  <p className="flex items-center gap-2 text-slate-500">
                    <CircleAlert size={16}/>
                    <span>입하군 저장 후 출하 계획을 등록할 수 있습니다.</span>
                  </p>
                  <CustomBtn variant="primary" size="lg">입하군 저장</CustomBtn>
                </div>
              </GroupItem>
              <a href="#" className={`min-h-[186px] rounded-2xl p-4 bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-slate-400 hover:text-slate-500 transition-colors duration-200 text-xl md:text-3xl`}>
                추가 <Plus className="ml-1 text-xl md:text-3xl"/>
              </a>
            </div>
          </div>
        </ModuleWrap>
      </Container>
    </>
  );
}
