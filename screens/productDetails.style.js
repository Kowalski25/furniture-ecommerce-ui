import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
    position: "absolute",
    top: SIZES.xxLarge,
    width: SIZES.width - 35,
    zIndex: 99,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    width: SIZES.width,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
    top: 20,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
  },
  price: {
    fontFamily: "semibold",
    fontSize: SIZES.large,
    paddingHorizontal: 10,
  },
  ratingRow: {
    
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 5,
    width: SIZES.width - 10,
  },
  rating: {
    top: SIZES.large,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: SIZES.large - 2,
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: 'medium',
    marginHorizontal: 5,
  },
  itemCount: {
    color: COLORS.black,
    fontFamily: 'medium',
    fontSize: SIZES.large - 2,
    marginHorizontal: 8,
  },
  descriptionWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large,
  },
  descriptionTitle: {
    fontFamily: 'medium',
    fontSize: SIZES.large - 3,
    marginBottom: SIZES.xSmall - 4,
  },
  descriptionText: {
    fontFamily: 'regular',
    fontSize: SIZES.small + 2,
    marginBottom: SIZES.small,
    textAlign: 'justify',
  },
  location: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  cartRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width - 10,
  },
  cartBtn: {
    width: SIZES.width * 0.455,
    backgroundColor: COLORS.black,
    padding: SIZES.small,
    borderRadius: 50,
    marginLeft: 16,
  },
  cartTitle: {
    color: COLORS.lightWhite,
    fontFamily: 'bold',
    fontSize: SIZES.medium,
    textAlign: 'center'
  },
  addCart: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: 50,
    borderColor: COLORS.black,
    borderWidth: 2,
    marginRight: 5,
    padding: SIZES.small - 2,
    width: SIZES.width * 0.455,
  },
});

export default styles;
