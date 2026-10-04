import { localFeatures, localKpis, operationRecords } from "../data/workbench";
import type { OverviewResponse } from "../types";
import { APP_CODE, APP_NAME } from "../constants/app";

export function createFallbackOverview(): OverviewResponse {
  return {
    appName: APP_NAME,
    appCode: APP_CODE,
    description: "面向社区居民，提供保洁、保姆、月嫂等家政服务的在线预约与撮合平台。",
    features: localFeatures,
    kpis: localKpis,
    records: operationRecords,
  };
}
