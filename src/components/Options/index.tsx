import { OptionsContainer, Option } from "./styles";

interface OptionsProps {
  values: string[];
  onSelectValue: (value: string) => void;
  valueSelected: string;
}

export function Options({ values, valueSelected, onSelectValue }: OptionsProps){
  function handleSetValue(value: string){
    onSelectValue(value);
  }

  return (
    <OptionsContainer>
      {values.map(value => (
        <Option 
          key={value}
          onClick={() => handleSetValue(value)}
          isSelected={value === valueSelected}
        >
          {value}
        </Option>
      ))}
    </OptionsContainer>
  );
}