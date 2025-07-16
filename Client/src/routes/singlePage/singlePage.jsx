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
    <div
      className="card-hero"
      style={{
        backgroundImage: `linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%), url(${
          post?.images?.[0] || "/bg.png"
        })`,
      }}
    >
      <div className="card-glass">
        <h1>{post?.title || "No Title"}</h1>
        <div className="address">
          <img src="/pin.png" alt="" />
          <span>{post?.address || "No Address"}</span>
        </div>
        <div className="price">${post?.price || "-"}</div>
        <div className="feature-chips">
          <FeatureChip
            icon="/utility.png"
            label="Utilities"
            value={
              post?.postDetail?.utilities === "owner"
                ? "Owner is responsible"
                : "Tenant is responsible"
            }
            color="#ffb347"
          />
          <FeatureChip
            icon="/pet.png"
            label="Pet Policy"
            value={
              post?.postDetail?.pet === "allowed"
                ? "Pets Allowed"
                : "Pets not allowed"
            }
            color="#77dd77"
          />
          <FeatureChip
            icon="/fee.png"
            label="Income Policy"
            value={post?.postDetail?.income || "Not specified"}
            color="#fcb69f"
          />
          <FeatureChip
            icon="/size.png"
            label="Size"
            value={
              post?.postDetail?.size ? post.postDetail.size + " sqft" : "-"
            }
            color="#a0c4ff"
          />
          <FeatureChip
            icon="/bed.png"
            label="Bedrooms"
            value={post?.bedroom ? post.bedroom + " beds" : "-"}
            color="#bdb2ff"
          />
          <FeatureChip
            icon="/bath.png"
            label="Bathrooms"
            value={post?.bathroom ? post.bathroom + " bathroom" : "-"}
            color="#ffc6ff"
          />
        </div>
        <div className="card-actions">
          <button className="gradient-btn">
            <img src="/save.png" alt="" /> Save
          </button>
          <button className="gradient-btn">
            <img src="/chat.png" alt="" /> Message
          </button>
        </div>
      </div>
      <svg className="wave-divider" viewBox="0 0 1440 320">
        <path
          fill="#fcb69f"
          fillOpacity="1"
          d="M0,224L1440,96L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default SinglePage;

// --- Helper Components ---
function FeatureChip({ icon, label, value, color }) {
  return (
    <div className="feature-chip" style={{ background: color }}>
      <img src={icon} alt={label} />
      <span>
        {label}: {value}
      </span>
    </div>
  );
}
