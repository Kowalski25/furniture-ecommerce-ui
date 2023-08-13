import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginEnd: 10,
    height: 240,
    width: 182,
  },
  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  supplier: {
    color: COLORS.gray,
    fontFamily: "regular",
    fontSize: SIZES.small,
    marginBottom: 2,
  },
  price: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
  },
  addBtn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
});

export default styles;
