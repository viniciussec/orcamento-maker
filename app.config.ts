import "ts-node/register"; // Add this to import TypeScript files
import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "orcamento-maker",
  slug: "orcamento-maker",
  scheme: "orcamento-maker",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
};

export default config;
