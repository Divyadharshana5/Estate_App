import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

function ListPage() {
  const data = useLoaderData();

  return (
    <div className="listPage unique-list-page-bg">
      <header className="unique-list-header">
        <h1>🏡 Explore Properties</h1>
        <p className="unique-list-subheader">
          Find your dream home or next investment from our curated listings.
        </p>
      </header>
      <div className="listContainer unique-list-container">
        <div className="wrapper">
          <div className="unique-filter-container">
            <Filter />
          </div>
          <Suspense fallback={<p className="unique-loading">Loading...</p>}>
            <Await
              resolve={data.packageLocation}
              errorElement={<p className="unique-error">Error loading posts</p>}
            >
              {(postResponse) =>
                Array.isArray(postResponse?.data) &&
                postResponse.data.length > 0 ? (
                  <div className="unique-card-grid">
                    {postResponse.data.map((post) => (
                      <Card key={post.id} item={post} />
                    ))}
                  </div>
                ) : (
                  <div className="unique-empty-state">
                    <img
                      src="/public/search.png"
                      alt="No posts"
                      className="unique-empty-img"
                    />
                    <p>No posts found. Try adjusting your filters!</p>
                  </div>
                )
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer unique-map-container">
        <Suspense fallback={<p className="unique-loading">Loading...</p>}>
          <Await
            resolve={data.packageLocation}
            errorElement={<p className="unique-error">Error loading posts</p>}
          >
            {(postResponse) =>
              Array.isArray(postResponse?.data) &&
              postResponse.data.length > 0 ? (
                <Map items={postResponse.data} />
              ) : (
                <div className="unique-empty-state">
                  <img
                    src="/public/map.png"
                    alt="No map data"
                    className="unique-empty-img"
                  />
                  <p>No posts to display on map.</p>
                </div>
              )
            }
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default ListPage;
