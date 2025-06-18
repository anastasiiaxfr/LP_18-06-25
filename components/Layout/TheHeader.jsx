import { Button } from "@/components/ui/button";

import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Drawer from "./Drawer";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <NavMenu />
        <div className="flex gap-2">
          <Button variant="outline" className="btn-bd-white">
            Sign In
          </Button>
          <div className="lg:hidden">
            <Drawer />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
