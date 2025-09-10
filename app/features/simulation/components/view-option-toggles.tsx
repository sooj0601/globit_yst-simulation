import { useState } from "react";
import { Check } from "lucide-react";
import CustomBtn from "~/common/components/ui/form/CustomBtn";

const toggleOptions = [
  { key: "profit", label: "예측 수익", activeVariant: "red" },
  { key: "sales", label: "예측 판매 금액", activeVariant: "green" },
  { key: "feed", label: "예측 소진 사료 비용", activeVariant: "yellow" },
  { key: "weight", label: "예측 체중", activeVariant: "blue" },
] as const;

export default function ViewOptionToggles() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (key: string) => {
    setSelected((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <div className="flex flex-wrap gap-2">
      {toggleOptions.map((opt) => {
        const isActive = selected.includes(opt.key);
        return (
          <CustomBtn
            key={opt.key}
            size="sm"
            variant={opt.activeVariant}
            leftIcon={isActive ? <Check size={16} /> : undefined}
            onClick={() => handleToggle(opt.key)}
            className={isActive ? "" : "opacity-30"}
          >
            {opt.label}
          </CustomBtn>
        );
      })}
    </div>
  );
}
