import { useState } from 'react';
import PageUtilLine from '~/common/components/ui/layout/PageUtilLine';
import Container from '~/common/layouts/Container';
import PageTitle from '~/common/components/ui/layout/PageTitle';
import GroupItemList from '~/common/components/modules/GroupItemList';
import CustomLabel from '~/common/components/ui/form/CustomLabel';
import { Accordion } from '~/common/components/ui/layout/Accordion';
import WaterTankItemLine from '~/features/monitoring/components/water-tank-item';
import InfoItem from '~/features/monitoring/components/info-item';
import PopoverEditInfo from '~/features/monitoring/components/popover-edit-info';
import DotBadge from "~/features/monitoring/components/dot-badge";
import Input from '~/common/components/ui/form/Input';
import ModalDensitySet from "~/features/monitoring/components/modal-density-set";

export default function FarmMonitoringPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [openModal, setOpenModal] = useState<string | null>(null);
  return (
    <>
      <PageTitle title="양식 현황" desc="양식현황 페이지 입니다. 페이지 설명 텍스트가 들어갑니다." />
      <Container>
        <PageUtilLine>
          <div className="flex items-center justify-center gap-4 w-full md:w-auto mx-auto md:mx-0">
            <div className="flex items-center gap-4 grow max-w-3/4 md:max-w-none">
              <CustomLabel label="기준일자 선택" className="hidden md:flex"/>
              <Input
                id="date-pick"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border-b border-slate-800 grow md:w-56"
                inputStyle="border-none"
              />
            </div>
            <PopoverEditInfo />
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:items-center gap-4 lg:justify-between" >
            <div className="flex md:item-center gap-y-1 gap-2 md:gap-4 flex-wrap p-4 md:p-0 bg-slate-100 md:bg-white rounded-2xl md:rounded-none">
              <InfoItem variant="colorful" label="전체 보유 미수" value="3,000" />
              <InfoItem variant="colorful" label="전체 중량" value="3,000 kg" />
              <InfoItem variant="colorful" label="폐사 미수" value="3,000" />
            </div>
            <div className="flex items-center gap-4 lg:justify-end">
              <CustomLabel className="min-w-auto" label="밀식률" />
              <DotBadge variant="green" />
              <DotBadge variant="yellow" />
              <DotBadge variant="red" />
            </div>
          </div>
          <GroupItemList />
        </PageUtilLine>
        <div className="flex flex-col gap-4">
          <Accordion title="A동">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
              <WaterTankItemLine tankName="A-1" colorName="violet" state="green" onClick={() => setOpenModal("modal1")}>
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="A-1" colorName="violet" state="green">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="A-1" colorName="violet" state="green">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="A-1" colorName="violet" state="yellow">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="A-1" colorName="violet" state="yellow">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="A-1" colorName="violet" state="yellow">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="A-1" colorName="lime" state="green">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="A-1" colorName="lime" state="red">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="A-1" colorName="pink" state="red">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
            </div>
          </Accordion>
          <Accordion title="B동">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
              <WaterTankItemLine tankName="B-1" colorName="teal" state="green">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="B-1" colorName="teal" state="green">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="B-1" colorName="teal" state="yellow">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="B-1" colorName="yellow" state="red">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="B-1" colorName="yellow" state="yellow">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="B-1" colorName="cyan" state="green">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
            </div>
          </Accordion>
          <Accordion title="C동">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
              <WaterTankItemLine tankName="B-1" colorName="teal" state="green">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="B-1" colorName="teal" state="green">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="B-1" colorName="teal" state="yellow">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="B-1" colorName="yellow" state="red">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="B-1" colorName="yellow" state="yellow">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
              <WaterTankItemLine tankName="B-1" colorName="cyan" state="green">
                <InfoItem label="미수" value="500" />
                <InfoItem label="체중" value="3,000kg" />
              </WaterTankItemLine>
            </div>
          </Accordion>
        </div>
      </Container>
      {/* 밀도 설정 팝업 */}
      <ModalDensitySet
        isOpen={openModal === "modal1"}
        onClose={() => setOpenModal(null)}
      />
    </>
  );
}
