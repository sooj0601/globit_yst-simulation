import Container from '~/common/layouts/Container';
import ModuleWrap from '~/features/simulation/components/module-wrap';
import PageTitle from "~/common/components/ui/layout/PageTitle";
import { Plus, ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import CustomBtn from "~/common/components/ui/form/CustomBtn";
import GroupItem from "~/features/simulation/components/group-item";
import Input from "~/common/components/ui/form/Input";
import { InfoSet, InfoGroup } from "~/features/simulation/components/info-set";
import { useState } from "react";
import ChartPlaceholder from "~/features/simulation/components/chart-placeholder";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import BtnWrap from "~/common/components/ui/form/BtnWrap";
import FarmSelect from "~/common/components/modules/FarmSelect";
import {
  CommTable,
  CommTableHead,
  CommTableTd,
  CommTableTh,
  CommTableRow,
} from "~/features/simulation/components/comm-table";
import DataBadge from "~/features/simulation/components/data-badge";
import CustomLabel from "~/common/components/ui/form/CustomLabel";
import ViewOptionToggles from "~/features/simulation/components/view-option-toggles";

export default function PlanPage() {
  const [dates, setDates] = useState<{ [key: string]: string }>({});
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDateChange = (key: string, value: string) => {
    setDates((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <PageTitle
        title="출하 예약 등록"
        desc="등록된 입식 그룹의 출하 예약을 수립할 수 있습니다."
      />
      <Container>
        <div className="flex flex-col gap-10 lg:gap-12 ">
          <ModuleWrap title="출하 계획 목록" className="relative">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 bg-slate-100 rounded-2xl p-4">
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center text-slate-500">
                  <div className="flex gap-2 items-center">
                    <div className="w-4 h-4 border-2 border-dotted border-slate-500 rounded"></div>
                    <strong>실제 입식 그룹</strong>
                  </div>
                  <span>
                    실제 입식 그룹은 양식일지 포털과 연동 되는 현재 양식장에 실 입하된 입하군 입니다.
                  </span>
                </div>
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center text-slate-500">
                  <div className="flex gap-2 items-center">
                    <div className="w-4 h-4 border-2 border-slate-500 rounded"></div>
                    <strong>계획 입식 그룹</strong>
                  </div>
                  <span>
                    실제 입식 그룹은 양식일지 포털과 연동 되는 현재 양식장에 실 입하된 입하군 입니다.
                  </span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center lg:justify-between">
                <div className="flex items-center gap-4 grow md:max-w-none order-2 lg:order-1">
                  <CustomLabel className="!min-w-[48px]" label="폐사율"/>
                  <div className="flex gap-2 items-center grow">
                    <Input
                      type="text"
                      className="w-20"
                      unit="%"
                      defaultValue="0"
                    />
                  </div>
                </div>
                <FarmSelect className="order-1 lg:order-2" />
              </div>
              <div className="relative w-full">
                <div className="overflow-hidden">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={16}
                  slidesPerView={2}
                  slidesPerGroup={1}
                  navigation={{
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                    disabledClass: 'swiper-button-disabled'
                  }}
                  className="!overflow-visible relative"
                  breakpoints={{
                    0: { slidesPerView: 1, autoHeight: true },
                    768: { slidesPerView: 2, autoHeight: true },
                  }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                  <SwiperSlide>
                    <div className={`transition-all duration-300 ${activeIndex === 0 ? 'opacity-100' : 'opacity-60'}`}>
                      <GroupItem groupName="20250503-넙치-1" colorName="violet" state="active">
                        <InfoGroup className="w-full grid grid-cols-2">
                          <InfoSet variant="row" label="입식일자" className="col-span-2 md:col-span-1">
                            <p>2025-05-03</p>
                          </InfoSet>
                          <InfoSet label="예상 폐사율"><p>11%</p></InfoSet>
                          <InfoSet label="월 평균 급이량"><p>20kg</p></InfoSet>
                          <InfoSet label="평균체중"><p>1.2kg</p></InfoSet>
                          <InfoSet label="구입 금액" className="col-span-2 md:col-span-1">
                            <p>23,000,000원</p>
                          </InfoSet>
                        </InfoGroup>
                      </GroupItem>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={`transition-all duration-300 ${activeIndex === 1 ? 'opacity-100' : 'opacity-60'}`}>
                      <GroupItem groupName="20250503-넙치-1" colorName="violet" state="plan" mode="edit">
                        <InfoGroup className="w-full grid grid-cols-2">
                          <InfoSet variant="row" label="입식일자" className="col-span-2 md:col-span-1">
                            <Input
                              id="date-pick-plan"
                              type="date"
                              value={dates["plan-1"] || ""}
                              onChange={(e) => handleDateChange("plan-1", e.target.value)}
                              className="md:w-40"
                            />
                          </InfoSet>
                          <InfoSet label="예상 폐사율" className="col-span-2 md:col-span-1">
                            <Input type="text" unit="%" number className="grow" value="11" />
                          </InfoSet>
                          <InfoSet label="월 평균 급이량" className="col-span-2 md:col-span-1">
                            <Input type="text" unit="kg" number className="grow" value="20" />
                          </InfoSet>
                          <InfoSet label="평균체중" className="col-span-2 md:col-span-1">
                            <Input type="text" unit="kg" number className="grow" value="1.2" />
                          </InfoSet>
                          <InfoSet label="구입 금액" className="col-span-2 md:col-span-1">
                            <Input type="text" unit="원" number className="grow" value="23,000,000" />
                          </InfoSet>
                        </InfoGroup>
                      </GroupItem>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={`transition-all duration-300 ${activeIndex === 2 ? 'opacity-100' : 'opacity-60'}`}>
                      <GroupItem groupName="20250503-넙치-1" colorName="lime" state="active" mode="edit">
                        <InfoGroup className="w-full grid grid-cols-2">
                          <InfoSet variant="row" label="입식일자" className="col-span-2 md:col-span-1">
                            <p>2025-05-03</p>
                          </InfoSet>
                          <InfoSet label="예상 폐사율"><p>11%</p></InfoSet>
                          <InfoSet label="월 평균 급이량"><p>20kg</p></InfoSet>
                          <InfoSet label="평균체중"><p>1.2kg</p></InfoSet>
                          <InfoSet label="구입 금액" className="col-span-2 md:col-span-1"><p>23,000,000원</p></InfoSet>
                        </InfoGroup>
                      </GroupItem>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={`transition-all duration-300 ${activeIndex === 2 ? 'opacity-100' : 'opacity-60'}`}>
                      <GroupItem groupName="20250503-넙치-1" colorName="pink" state="active" mode="edit">
                        <InfoGroup className="w-full grid grid-cols-2">
                          <InfoSet variant="row" label="입식일자" className="col-span-2 md:col-span-1">
                            <p>2025-05-03</p>
                          </InfoSet>
                          <InfoSet label="예상 폐사율"><p>11%</p></InfoSet>
                          <InfoSet label="월 평균 급이량"><p>20kg</p></InfoSet>
                          <InfoSet label="평균체중"><p>1.2kg</p></InfoSet>
                          <InfoSet label="구입 금액" className="col-span-2 md:col-span-1"><p>23,000,000원</p></InfoSet>
                        </InfoGroup>
                      </GroupItem>
                    </div>
                  </SwiperSlide>
                </Swiper>
                </div>
                <div className="flex justify-center items-center gap-4 mt-4 lg:mt-0">
                  <div className="custom-swiper-button-prev static translate-y-0 flex justify-center z-10 lg:absolute lg:-left-14 lg:top-1/2 lg:-translate-y-1/2">
                    <button className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center hover:text-slate-800 text-slate-500 cursor-pointer">
                      <ChevronLeft className="size-8" />
                    </button>
                  </div>
                  <span className="w-[2px] h-4 bg-slate-300 lg:hidden"></span>
                  <div className="custom-swiper-button-next static translate-y-0 flex justify-center z-10 lg:absolute lg:-right-14 lg:top-1/2 lg:-translate-y-1/2">
                    <button className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center hover:text-slate-800 text-slate-500 cursor-pointer">
                      <ChevronRight className="size-8" />
                    </button>
                  </div>
                </div>
              </div>
              <ModuleWrap
                groupName="20250504-넙치-1"
                title="월별 예측 시뮬레이션"
                desc={<span className="text-slate-500 text-sm">출하 계획을 등록을 위해 출하할 월을 선택하세요.</span>}
                colorName="violet"
                state="active"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 grow md:max-w-none order-2 lg:order-1">
                  <CustomLabel className="!min-w-[48px]" label="조회 항목 설정"/>
                  <ViewOptionToggles />
                </div>
                <ChartPlaceholder ratio={1 / 3} />
              </ModuleWrap>
            </div>
          </ModuleWrap>
          <ModuleWrap title="월별 밀도" desc={<span className="text-slate-500 text-sm">월별 수조 점유율(kg/m3) = 월별 입식 그룹 예상 중량 / 양식장 수조 총 용량</span>} >
            <ChartPlaceholder ratio={1 / 8} />
          </ModuleWrap>
          <ModuleWrap title="출하 목록" desc={<span className="text-slate-500 text-sm">화면을 좌우로 스크롤하시면 전체 표를 확인하실 수 있습니다.</span>} >
            <div className="flex flex-col gap-4">
              <CommTable>
                <CommTableHead>
                  <CommTableRow>
                    <CommTableTh className="w-56">입식 그룹</CommTableTh>
                    <CommTableTh className="w-32">출하 월</CommTableTh>
                    <CommTableTh className="w-32">입식 보유 미수</CommTableTh>
                    <CommTableTh className="w-32">구매비용<br/>(A)</CommTableTh>
                    <CommTableTh className="w-32">예측 보유 중량</CommTableTh>
                    <CommTableTh className="w-32">출하 중량</CommTableTh>
                    <CommTableTh className="w-32">출하 미수</CommTableTh>
                    <CommTableTh className="w-32">예측 출하 체중</CommTableTh>
                    <CommTableTh className="w-32">예측 누적 소진<br/>사료비용 (B)</CommTableTh>
                    <CommTableTh className="w-32">기타비용<br/>(C)</CommTableTh>
                    <CommTableTh className="w-32">예측 판매 금액<br/>(D)</CommTableTh>
                    <CommTableTh className="w-32">예측 수익<br/>D-(A+B+C)</CommTableTh>
                    <CommTableTh className="w-14">계획 삭제</CommTableTh>
                  </CommTableRow>
                </CommTableHead>
                <tbody>
                <CommTableRow>
                  <CommTableTd>
                    <div className="flex items-center gap-2 justify-center">
                      <DataBadge variant="green">계획</DataBadge>
                      <strong>2505-넙치-2</strong>
                    </div>
                  </CommTableTd>
                  <CommTableTd>
                    <Input
                      id="date-pick-table"
                      type="date"
                      value={dates["table-1"] || ""}
                      onChange={(e) => handleDateChange("table-1", e.target.value)}
                    />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="마리" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="원" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="kg" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="kg" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="마리" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="kg" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="원" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="원" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="원" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd><strong className="text-rose-500">230,000,000</strong></CommTableTd>
                  <CommTableTd>
                    <CustomBtn variant="danger" size="icon">
                      <Trash2 size={16}/>
                    </CustomBtn>
                  </CommTableTd>
                </CommTableRow>
                <CommTableRow>
                  <CommTableTd>
                    <div className="flex items-center gap-2 justify-center">
                      <DataBadge variant="primary">실제</DataBadge>
                      <strong>2505-넙치-2</strong>
                    </div>
                  </CommTableTd>
                  <CommTableTd>
                    <Input
                      id="date-pick-table"
                      type="date"
                      value={dates["table-1"] || ""}
                      onChange={(e) => handleDateChange("table-1", e.target.value)}
                    />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="마리" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="원" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="kg" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="kg" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="마리" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="kg" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="원" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="원" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd>
                    <Input type="text" unit="원" number className="grow" defaultValue="999" />
                  </CommTableTd>
                  <CommTableTd><strong className="text-rose-500">230,000,000</strong></CommTableTd>
                  <CommTableTd>
                    <CustomBtn variant="danger" size="icon">
                      <Trash2 size={16}/>
                    </CustomBtn>
                  </CommTableTd>
                </CommTableRow>
                </tbody>
              </CommTable>
              <CustomBtn variant="ghost" size="lg" className="w-full lg:mt-4" rightIcon={<Plus size={16}/>}>출하계획 추가하기</CustomBtn>
            </div>
          </ModuleWrap>
        </div>
        <BtnWrap lineTop>
          <CustomBtn size="lg" variant="primary" className="ml-auto grow w-full md:grow-0 md:w-auto" >계획표 저장</CustomBtn>
        </BtnWrap>
      </Container>
    </>
  );
}
