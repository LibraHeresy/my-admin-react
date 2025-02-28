import request from "./request";

const userApi = {
  // 获取工作台数据
  GetWorkbenchesData: "/api/workbench/getData",
};

export function getWorkbenchData(parameter) {
  return request({
    url: userApi.GetWorkbenchesData,
    method: "get",
    data: parameter,
  });
}
