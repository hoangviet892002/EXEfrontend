import { CardCategories } from "../../components";
import useHook from "./hooks/useHook";
import { useTranslation } from "react-i18next";
const Categories = () => {
  const { t } = useTranslation();
  const { categories } = useHook();
  return (
    <>
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mb-6">
                <h3 className="mb-0">{t("Shop Popular Categories")}</h3>
              </div>
            </div>
            <div className="row">
              {categories.map((category, index) => (
                <CardCategories category={category} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Categories;
