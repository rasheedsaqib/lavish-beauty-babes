import Hero from "../Components/Index/Hero/hero";
import Products from "../Components/Index/Products/products";
import Categories from "../Components/Index/Categories/categories";
import Branding from "../Components/Index/Branding/branding";
import Blog from "../Components/Index/Blog/blog";
import Experience from "../Components/Index/Experience/experience";
import Testimonial from "../Components/Index/Testimonial/testimonial";
import Feed from "../Components/Index/Feed/feed";

const Home = () => {
  return (
    <div>
        <Hero />
        <Products />
        <Categories />
        <Branding />
        <Blog />
        <Experience />
        <Testimonial />
        <Feed />
    </div>
  )
}

export default Home;