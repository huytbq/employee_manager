import { EgretLoadable } from "egret";
import ConstantList from "../../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const Agency = EgretLoadable({
    loader: () => import("./Province.jsx"),
});
const ViewComponent = withTranslation()(Agency);
const ProvinceRoutes = [
    {
        path: ConstantList.ROOT_PATH + "address/province",
        exact: true,
        component: ViewComponent
    }
];

export default ProvinceRoutes;