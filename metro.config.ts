const { withNativeWind } = require("nativewind/metro");
import { getDefaultConfig } from 'expo/metro-config';

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
