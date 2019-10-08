export default function log(message: string) {
    const logger = require('node-color-log');
    const setting = {
        bold: true,
        dim: true
    };

    logger.fontColorLog("green", "Logging via B-package:" + message, setting);
}