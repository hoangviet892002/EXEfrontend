import { CardProductV1 } from "../../components";
const RelationItem = () => {
  return (
    <section class="my-lg-14 my-14">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3>Related Items</h3>
          </div>
        </div>

        <div class="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-2 mt-2">
          <CardProductV1 />
          <CardProductV1 />
          <CardProductV1 />
        </div>
      </div>
    </section>
  );
};
export default RelationItem;
