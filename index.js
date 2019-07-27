/**
 * @format
 */
import { Navigation } from "react-native-navigation";
// import { AppRegistry } from "react-native";
import App from './App';
// import { name as appName } from "./app.json";
import RNFetchBlob, {
  FetchBlobResponse,
  RNFetchBlobResponseInfo
} from "rn-fetch-blob";
// AppRegistry.registerComponent(appName, () => App);

console.log(RNFetchBlob, FetchBlobResponse, RNFetchBlobResponseInfo);

Navigation.registerComponent('navigation.playground.WelcomeScreen', () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'navigation.playground.WelcomeScreen',
      },
    },
  });
});
