// import { devConfig } from "./environments/dev";
// import { qaConfig } from "./environments/qa";
// import { stageConfig } from "./environments/stage";

import { 
    devConfig,
    qaConfig,
    stageConfig
} from "./environments/index";

type Env = "dev" | "qa" | "stage";

const env = (process.env.ENV || "dev").toLowerCase() as Env;

const configMap = {
    dev: devConfig,
    qa: qaConfig,
    stage: stageConfig,
};

export const currentEnv = configMap[env];
