import {
  Box,
  FormControl,
  FormControlLabelText,
  HStack,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
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
  Button,
  ButtonIcon,
  ButtonText,
} from "@gluestack-ui/themed";

const Form = (props) => {
  const { onInputChange, onSubmit, onTypeChange } = props;

  return (
    <Box>
      <FormControl isRequired>
        <FormControl.Label>
          <FormControlLabelText>Search movie/TV Show Name</FormControlLabelText>
        </FormControl.Label>
        <Input>
          <InputSlot pl="$3">
            <InputIcon as={SearchIcon} />
          </InputSlot>
          <InputField
            placeholder="Search..."
            onChangeText={(value) => onInputChange(value)}
          />
        </Input>
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>
          <FormControlLabelText>Choose Search Type</FormControlLabelText>
        </FormControl.Label>
        <HStack>
          <Select onValueChange={(value) => onTypeChange(value)}>
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
                <SelectItem label="multi" value="multi" />
                <SelectItem label="movie" value="movie" />
              </SelectContent>
            </SelectPortal>
          </Select>
          <Button onPress={onSubmit}>
            <ButtonIcon as={SearchIcon} />
            <ButtonText>Search</ButtonText>
          </Button>
        </HStack>
      </FormControl>
    </Box>
  );
};

export default Form;
