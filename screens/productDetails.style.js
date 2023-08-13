import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    position: 'absolute',
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 99,
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  }
});

export default styles;
