import { CardCategories } from "../../components";
const Categories = () => {
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
              <CardCategories />
              <CardCategories />
              <CardCategories />
              <CardCategories />
              <CardCategories />
              <CardCategories />
              <CardCategories />
              <CardCategories />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Categories;
