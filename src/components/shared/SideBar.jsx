import {
  MessageCircleWarning,
  ShoppingCart,
  Store,
  User,
} from "lucide-react";
import "../../css/side-bar.css";
import Link from "next/link";

const SideBar = () => {
  const style = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <aside className="sidebar flex gap-36">
      <img src="/assets/logo.svg" alt="Logo" />
      <ul className="links gap-5">
        <Link href="/" style={style}>
          <li>
            <div className="link dashboard">
              <User />
              <p>Users</p>
            </div>
          </li>
        </Link>
        <Link href="/products?page=1" style={style}>
          <li>
            <div className="link dashboard">
              <Store />
              <p>Products</p>
            </div>
          </li>
        </Link>
        <Link href="/orders" style={style}>
          <li>
            <div className="link dashboard">
              <ShoppingCart />
              <p>Orders</p>
            </div>
          </li>
        </Link>
        <Link href="/reports" style={style}>
          <li>
            <div className="link dashboard">
              <MessageCircleWarning />
              <p>Reports</p>
            </div>
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default SideBar;
