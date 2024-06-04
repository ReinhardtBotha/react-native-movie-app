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
  Button,
  ButtonIcon,
  ButtonText,
} from "@gluestack-ui/themed";
import SelectFilter from "../ui/SelectFilter";

const selectOptions = ["multi", "movie"];

const Form = (props) => {
  const { onInputChange, onSubmit, onTypeChange } = props;

  const handleTypeChange = (value) => {
    onTypeChange(value);
  };

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
            placeholder="i.e James Bond, CSI"
            onChangeText={(value) => onInputChange(value)}
          />
        </Input>
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>
          <FormControlLabelText>Choose Search Type</FormControlLabelText>
        </FormControl.Label>
        <HStack>
          <SelectFilter
            initialLabel={selectOptions[0]}
            defaultValue={selectOptions[0]}
            handleTypeChange={handleTypeChange}
            selectOptions={selectOptions}
          />
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
