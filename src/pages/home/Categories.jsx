import { CardCategories } from "../../components";
import useHook from "./hooks/useHook";
const Categories = () => {
  const { categories } = useHook();
  return (
    <>
      <section class="my-lg-14 my-8">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="mb-6">
                <h3 class="mb-0">Shop Popular Categories</h3>
              </div>
            </div>
            <div class="row">
              {categories.map((category) => (
                <CardCategories category={category} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Categories;
