import { CardProductV1 } from "../../components";
import { useTranslation } from "react-i18next";

const RelationItem = () => {
  const { t } = useTranslation();
  return (
    <section className="my-lg-14 my-14">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>{t("Related Items")}</h3>
          </div>
        </div>

        <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-2 mt-2">
          <CardProductV1 />
          <CardProductV1 />
          <CardProductV1 />
        </div>
      </div>
    </section>
  );
};
export default RelationItem;
