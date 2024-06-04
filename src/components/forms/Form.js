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

const selectOptions = ["multi", "movie", "tv"];

const Form = (props) => {
  const { onInputChange, onSubmit, onTypeChange, styles } = props;

  const handleTypeChange = (value) => {
    onTypeChange(value);
  };

  return (
    <Box>
      <FormControl isRequired paddingBottom={10}>
        <FormControl.Label>
          <FormControlLabelText>Search movie/TV Show Name</FormControlLabelText>
        </FormControl.Label>
        <Input style={styles}>
          <InputSlot pl="$3">
            <InputIcon as={SearchIcon} />
          </InputSlot>
          <InputField
            placeholder="i.e James Bond, CSI"
            onChangeText={(value) => onInputChange(value)}
          />
        </Input>
      </FormControl>
      <FormControl isRequired paddingBottom={10}>
        <FormControl.Label>
          <FormControlLabelText>Choose Search Type</FormControlLabelText>
        </FormControl.Label>
        <HStack space="md" width={200}>
          <SelectFilter
            initialLabel={selectOptions[0]}
            defaultValue={selectOptions[0]}
            handleTypeChange={handleTypeChange}
            selectOptions={selectOptions}
            style={styles}
          />
          <Button onPress={onSubmit} backgroundColor="#06b6d4">
            <ButtonIcon as={SearchIcon} />
            <ButtonText>Search</ButtonText>
          </Button>
        </HStack>
      </FormControl>
    </Box>
  );
};

export default Form;
