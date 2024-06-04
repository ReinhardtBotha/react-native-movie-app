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

const SelectFilter = (props) => {
  const { handleTypeChange, initialLabel, defaultValue, selectOptions, style } =
    props;

  return (
    <Select
      initialLabel={initialLabel}
      defaultValue={defaultValue}
      onValueChange={(e) => handleTypeChange(e)}
      style={style}
      width="100%"
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
          {selectOptions?.map((item, index) => (
            <SelectItem key={index} label={item} value={item} />
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default SelectFilter;
