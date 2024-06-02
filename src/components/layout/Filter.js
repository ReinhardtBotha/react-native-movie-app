import {
  ChevronDownIcon,
  Icon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@gluestack-ui/themed";
import { showTypes } from "../../services/api";

const Filter = (props) => {
  const { screen, handleTypeChange } = props;

  return (
    <Select
      initialLabel={showTypes[screen][0]}
      defaultValue={showTypes[screen][0]}
      onValueChange={(e) => handleTypeChange(e)}
    >
      <SelectTrigger variant="outline" size="md">
        <SelectInput />
        <SelectIcon mr="$3">
          <Icon as={ChevronDownIcon} />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          {showTypes[screen].map((item, index) => (
            <SelectItem key={index} label={item} value={item} />
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default Filter;
