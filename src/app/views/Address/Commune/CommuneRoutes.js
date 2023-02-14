import { EgretLoadable } from "egret";
import ConstantList from "../../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const Agency = EgretLoadable({
    loader: () => import("./Commune.jsx"),
});
const ViewComponent = withTranslation()(Agency);
const CommuneRoutes = [
    {
        path: ConstantList.ROOT_PATH + "address/commune",
        exact: true,
        component: ViewComponent
    }
];

export default CommuneRoutes;