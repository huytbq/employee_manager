import { EgretLoadable } from "egret";
import ConstantList from "../../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const Agency = EgretLoadable({
    loader: () => import("./District.jsx"),
});
const ViewComponent = withTranslation()(Agency);
const DistrictRoutes = [
    {
        path: ConstantList.ROOT_PATH + "address/district",
        exact: true,
        component: ViewComponent
    }
];

export default DistrictRoutes;