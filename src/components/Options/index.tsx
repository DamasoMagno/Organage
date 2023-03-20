import { Loader } from "components/Skeleton";
import { OptionsContainer, Option } from "./styles";

interface OptionsProps {
  values: string[];
  onSelectValue: (value: string) => void;
  valueSelected: string;
  isLoading?: boolean;
}

export function Options({
  values,
  valueSelected,
  isLoading = false,
  onSelectValue
}: OptionsProps) {
  const handleSetValue = (value: string) => onSelectValue(value)

  return (
    <OptionsContainer>
      {!isLoading ? 
        values.map(value => (
          <Option
            key={value}
            onClick={() => handleSetValue(value)}
            isSelected={value === valueSelected}>
            {value}
          </Option>
        )) : 
        <Loader />
      }
    </OptionsContainer>
  );
}