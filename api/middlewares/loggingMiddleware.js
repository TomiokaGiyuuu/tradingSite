import logger from "../utils/logger.js";

export function logging(req, res, next) {
    const ms = new Date().getTime() - req.locals.getTime();
    logger.info(`${res.socket?.remoteAddress} [${req.method}] ${req.originalUrl}: ${res.statusCode} (${res.statusMessage}) - ${ms}ms`);
    next();
}

export function writeDateLogging(req, res, next) {
    req.locals = new Date();
    next();
}