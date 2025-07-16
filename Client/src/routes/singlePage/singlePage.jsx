import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { redirect, useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function SinglePage() {
  const post = useLoaderData();
  const [saved, setSaved] = useState(post.isSaved);
  const { currentUser } = useContext(AuthContext);

  const handleSave = async () => {
    //AFTER REACT 19 UPDATE TO USEOPTIMISTIK HOOK
    setSaved((prev) => prev);
    if (!currentUser) {
      redirect("/login");
    }
    try {
      await apiRequest.post("/users/save", { postId: post.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => prev);
    }
  };
  return (
    <div className="singlePage">
      {/* Hero Section */}
      <div
        className="hero"
        style={{
          backgroundImage: `url(${post?.images?.[0] || "/bg.png"})`,
        }}
      >
        <div className="overlay">
          <h1>{post?.title || "No Title"}</h1>
          <div className="address">
            <img src="/pin.png" alt="" />
            <span>{post?.address || "No Address"}</span>
          </div>
          <div className="price">$ {post?.price || "-"}</div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          {/* Image Gallery */}
          <Slider images={post?.images || []} />
          {/* User Card */}
          <div className="userCard">
            <img src={post?.user?.avatar || "/noavatar.png"} alt="" />
            <div className="userInfo">
              <span className="username">
                {post?.user?.username || "Unknown User"}
              </span>
              {/* Optionally add a short bio or contact button here */}
            </div>
          </div>
          {/* Expandable Description */}
          <ExpandableDescription
            desc={post?.postDetail?.desc || "No description available."}
          />
          {/* Features Grid */}
          <div className="features-grid">
            <FeatureCard
              icon="/utility.png"
              label="Utilities"
              value={
                post?.postDetail?.utilities === "owner"
                  ? "Owner is responsible"
                  : "Tenant is responsible"
              }
            />
            <FeatureCard
              icon="/pet.png"
              label="Pet Policy"
              value={
                post?.postDetail?.pet === "allowed"
                  ? "Pets Allowed"
                  : "Pets not allowed"
              }
            />
            <FeatureCard
              icon="/fee.png"
              label="Income Policy"
              value={post?.postDetail?.income || "Not specified"}
            />
            <FeatureCard
              icon="/size.png"
              label="Size"
              value={
                post?.postDetail?.size ? post.postDetail.size + " sqft" : "-"
              }
            />
            <FeatureCard
              icon="/bed.png"
              label="Bedrooms"
              value={post?.bedroom ? post.bedroom + " beds" : "-"}
            />
            <FeatureCard
              icon="/bath.png"
              label="Bathrooms"
              value={post?.bathroom ? post.bathroom + " bathroom" : "-"}
            />
            <FeatureCard
              icon="/school.png"
              label="School"
              value={
                post?.postDetail?.school > 999
                  ? post.postDetail.school / 1000 + "km away"
                  : (post?.postDetail?.school || "-") + "m away"
              }
            />
            <FeatureCard
              icon="/pet.png"
              label="Bus Stop"
              value={
                post?.postDetail?.bus ? post.postDetail.bus + "m away" : "-"
              }
            />
            <FeatureCard
              icon="/fee.png"
              label="Restaurant"
              value={
                post?.postDetail?.restaurant
                  ? post.postDetail.restaurant + "m away"
                  : "-"
              }
            />
          </div>
          {/* Location Map */}
          <p className="title">Location</p>
          <div className="mapContainer">
            {typeof post?.lat === "number" && typeof post?.lng === "number" ? (
              <Map items={[post]} />
            ) : (
              <div>No location data available.</div>
            )}
          </div>
          {/* Action Buttons */}
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button
              onClick={handleSave}
              style={{ backgroundColor: saved ? "#fece51" : "white" }}
            >
              <img src="/save.png" alt="" />
              {saved ? "Place Saved" : "Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;

// --- Helper Components ---

function FeatureCard({ icon, label, value }) {
  return (
    <div className="featureCard">
      <img src={icon} alt={label} />
      <div className="featureText">
        <span>{label}</span>
        <p>{value}</p>
      </div>
    </div>
  );
}

function ExpandableDescription({ desc }) {
  const [expanded, setExpanded] = useState(false);
  const preview = desc.length > 200 ? desc.slice(0, 200) + "..." : desc;
  return (
    <div className="expandableDescription">
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(expanded ? desc : preview),
        }}
      ></div>
      {desc.length > 200 && (
        <button className="expandBtn" onClick={() => setExpanded((e) => !e)}>
          {expanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
