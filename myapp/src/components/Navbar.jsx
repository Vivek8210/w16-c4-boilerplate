import { Link,NavLink } from "react-router-dom";
import { useContext } from "react";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: "30px", gap:"50px" ,display:"flex",textAlign:"center" }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      
       <div > <Link style={{color:"white",textDecoration:"none"}} to={"/home"}>Home</Link></div>
       <div> <Link style={{color:"white",textDecoration:"none"}} to={"/about"}>About</Link></div>
        <div><Link style={{color:"white",textDecoration:"none"}} to={"/products"}>Products</Link></div>
        <div> <Link style={{color:"white",textDecoration:"none"}} to={"/men"}>Men</Link></div>
       <div> <Link style={{color:"white",textDecoration:"none"}} to={"/women"}>women</Link></div>
        <div><Link style={{color:"white",textDecoration:"none"}} to={"/kids"}>Kids</Link></div>
        <div><Link style={{color:"white",textDecoration:"none"}} to={"/homedecor"}>Home decor</Link></div>

      

    </nav>
  );
};
