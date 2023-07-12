import { extensionName } from "./const";

const log = (msg: string) => {
    console.log(`[${extensionName}] ${msg}`);
};

export default log;