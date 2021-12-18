import star from "../../imgs/star.svg";
import "./BlogHero.css";
const BlogHero = () => {
  return (
    <div className="blog-hero-section">
      <img className="star" src={star} alt="" />
      <div style={{ marginLeft: "4rem" }}>
        <h2>Blog</h2>
        <p>We invite you to step into our content library.</p>
      </div>
    </div>
  );
};

export default BlogHero;
