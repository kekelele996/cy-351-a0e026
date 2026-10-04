import type { FeatureItem, KpiItem, OperationRecord } from "../types";

export const localFeatures: FeatureItem[] = [
  {
    "id": 1,
    "title": "阿姨/师傅档案与技能标签",
    "description": "录入家政服务人员信息（姓名、年龄、籍贯、工作经验），设置技能标签（保洁/做饭/育儿/老人护理），上传健康证和资质证书。",
    "status": "已上线",
    "metric": "88%"
  },
  {
    "id": 2,
    "title": "服务分类与预约时段",
    "description": "划分服务类型（日常保洁/深度保洁/保姆/月嫂/家电清洗），用户选择服务类型后查看可约阿姨和时段，在线下单预约。",
    "status": "排期中",
    "metric": "31 单"
  },
  {
    "id": 3,
    "title": "订单管理与派单",
    "description": "用户下单后管理员根据服务类型、地址和阿姨档期进行派单，阿姨接单后上门服务，服务完成后用户确认验收并结算。",
    "status": "巡检中",
    "metric": "10 项"
  },
  {
    "id": 4,
    "title": "用户评价与信誉分",
    "description": "服务完成后用户对阿姨进行评分和文字评价，系统自动计算阿姨信誉分，高分阿姨优先推荐，差评触发管理员复核。",
    "status": "优化中",
    "metric": "4 级"
  },
  {
    "id": 5,
    "title": "薪资结算与提现",
    "description": "记录阿姨每笔订单收入，支持按周/月汇总结算，阿姨可申请提现到银行卡，管理员审核后打款，全程留痕。",
    "status": "可导出",
    "metric": "28 条"
  }
];

export const localKpis: KpiItem[] = [
  {
    "label": "今日处理",
    "value": "116",
    "trend": "+12%",
    "tone": "primary"
  },
  {
    "label": "预约/订单",
    "value": "58",
    "trend": "+8%",
    "tone": "warm"
  },
  {
    "label": "履约率",
    "value": "90%",
    "trend": "+3%",
    "tone": "cool"
  },
  {
    "label": "待处理",
    "value": "9",
    "trend": "需跟进",
    "tone": "neutral"
  }
];

export const operationRecords: OperationRecord[] = [
  {
    "key": "lphomecare-1",
    "name": "阿姨/师傅档案与技能标签",
    "owner": "运营组",
    "status": "已上线",
    "metric": "88%",
    "priority": "高"
  },
  {
    "key": "lphomecare-2",
    "name": "服务分类与预约时段",
    "owner": "管理员",
    "status": "排期中",
    "metric": "31 单",
    "priority": "中"
  },
  {
    "key": "lphomecare-3",
    "name": "订单管理与派单",
    "owner": "服务台",
    "status": "巡检中",
    "metric": "10 项",
    "priority": "低"
  },
  {
    "key": "lphomecare-4",
    "name": "用户评价与信誉分",
    "owner": "财务组",
    "status": "优化中",
    "metric": "4 级",
    "priority": "高"
  },
  {
    "key": "lphomecare-5",
    "name": "薪资结算与提现",
    "owner": "审核组",
    "status": "可导出",
    "metric": "28 条",
    "priority": "中"
  }
];
