import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  location: {
    color: COLORS.gray,
    fontFamily: "semibold",
    fontSize: SIZES.medium,
  },
  cartCount: {
    backgroundColor: "green",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 16,
    height: 16,
    width: 16,
    zIndex: 999,
  },
  cartNumber: {
    color: COLORS.lightWhite,
    fontFamily: "regular",
    fontSize: 10,
    fontWeight: 600,
  },
});

export default styles;
