import ConstantList from "./appConfig";
export const navigations = [
  {
    name: "Dashboard.dashboard",
    icon: "dashboard",
    path: ConstantList.ROOT_PATH + "dashboard/analytics",
    isVisible: true,
  },
  {
    name: "Dashboard.category",
    icon: "dashboard",
    path: "",
    isVisible: true,
    children: [

      {
        name: "Dashboard.category",
        path: ConstantList.ROOT_PATH + "directory/category",
        icon: "keyboard_arrow_right",
        isVisible: true,
      },
      {
        name: "Dashboard.timeshet",
        path: ConstantList.ROOT_PATH + "directory/timesheet",
        icon: "keyboard_arrow_right",
        isVisible: true,
      },
      {
        name: "Nhân viên",
        path: ConstantList.ROOT_PATH + "directory/employees",
        icon: "keyboard_arrow_right",
        isVisible: true,
      }
    ]
  },

  , {
    name: "Dashboard.manage",
    isVisible: true,
    icon: "engineering",
    children: [
      {
        name: "Dashboard.eQAActivityLog",
        isVisible: true,
        path: ConstantList.ROOT_PATH + "user_manager/activity_log",
        icon: "keyboard_arrow_right"
      },
      {
        name: "manage.user",
        isVisible: true,
        path: ConstantList.ROOT_PATH + "user_manager/user",
        icon: "keyboard_arrow_right"
      },
      {
        name: "manage.menu",
        isVisible: true,
        path: ConstantList.ROOT_PATH + "list/menu",
        icon: "keyboard_arrow_right"
      }
    ]
  },
  {
    name: "Địa phương",
    path: ConstantList.ROOT_PATH + "address",
    icon: "dashboard",
    isVisible: true,
    children: [
      {
        name: "Tỉnh",
        path: ConstantList.ROOT_PATH + "address/province",
        icon: "keyboard_arrow_right",
        isVisible: true,
      },
      {
        name: "Huyện",
        path: ConstantList.ROOT_PATH + "address/district",
        icon: "keyboard_arrow_right",
        isVisible: true,
      },
      {
        name: "Xã",
        path: ConstantList.ROOT_PATH + "address/commune",
        icon: "keyboard_arrow_right",
        isVisible: true,
      }
    ]
  }
];
