import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 100,
    width: '100%',
    backgroundColor: Colors.dark.background,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    padding: 24,
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    // borderTopWidth: StyleSheet.hairlineWidth,
    // borderTopColor: Colors.pink400
    opacity: 0.9
  },
  inputField: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ABABAB',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  btn: {
    backgroundColor: Colors.pink500,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'mon-b',
  },
  btnIcon: {
    position: 'absolute',
    left: 16,
  },
})