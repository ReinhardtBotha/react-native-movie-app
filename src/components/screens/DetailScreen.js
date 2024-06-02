import ShowContainer from "../containers/ShowContainer";

const DetailScreen = (props) => {
  const { navigation, route } = props;
  return <ShowContainer navigation={navigation} route={route} />;
};

export default DetailScreen;
