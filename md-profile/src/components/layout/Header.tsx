import React from "react";
import Nav from './Nav';
const Header = () =>{
    return<head>
      <MobileNav />
        <strong className="logo">GoShopping!</strong>
        <Nav />
        <NavLogin />

        <style>{`
            header {
                background-color: ${colors.GRAYSCALE[0]};
                height: 5rem;
                color: ${colors.GRAYSCALE[5]};
                display: flex;
                align-items: center;
                justify-content: space-around;
                position: relative;
            }

            header .logo {
                color: ${colors.LIGHTEST};
                position: absolute;
                top: 1.85rem;
                left: .9rem;
                user-select: none;
            }
        `}</style>  
    </head>
}