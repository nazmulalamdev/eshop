import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../commonLayout/Container";

const BottomBar = () => {
  return (
    <>
      <div className="bg-[#FF624C]">
        <Container>
          <div className="flex justify-between items-center py-6">
            <div>
              <ul className="flex items-center gap-x-[80px] font-['Montserrat'] font-bold text-base leading-6 text-white">
                <li>
                  <Link
                    className="flex items-center gap-x-4"
                    to={"/product-list"}
                  >
                    <FaBars /> All Categories
                  </Link>
                </li>
                <li>
                  <Link to={"/product-list"}>Products</Link>
                </li>
                <li>
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex items-center gap-x-[80px] font-['Montserrat'] font-bold text-base leading-6 text-white">
                <li>
                  <Link to={"#"}>LIMITED SALE 👋🏻</Link>
                </li>
                <li>
                  <Link to={"#"}>Best Seller</Link>
                </li>
                <li>
                  <Link to={"#"}>New Arrival</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BottomBar;
