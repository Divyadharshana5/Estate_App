import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

function ListPage() {
  const posts = useLoaderData();

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.packageLocation}
              errorElement={<p>Error loading package location!</p>}
            ></Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer">
        <Map items={posts} />
      </div>
    </div>
  );
}

export default ListPage;
