import React, { useState } from 'react'
import { Nav, Button, Dropdown, Sidenav, Drawer, Placeholder } from 'rsuite';
import AdminIcon from '@rsuite/icons/Admin';
import SettingHorizontalIcon from '@rsuite/icons/SettingHorizontal';
import MenuIcon from '@rsuite/icons/Menu';
import PlaceholderParagraph from 'rsuite/esm/Placeholder/PlaceholderParagraph';


export default function Navigation() {

    const navigationStyles = {
        padding: "20px 0px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "18px",
        borderBottom: "#F6F6F6 2px solid",
    }

    const itemStyle = {
        cursor: "pointer",
        textAlign: "center",
        margin: "0 20px",
        listStyleType: "none",
        textDecoration: "none"
    }

    return (
        <div style={navigationStyles}>
            <div id="logo">
                <li style={itemStyle}>css dropshadow generator</li>
            </div>
            <div style={{ display: "flex" }}>
                <li className="menuItem" style={{ listStyleType: "none", borderBottom: "#3498ff 2px solid" }} >home <SettingHorizontalIcon /></li>
                <li className="menuItem" style={{ marginRight: "20px" }}>about <AdminIcon /></li>
            </div>
        </div>
    )
}

export function MobileMenu() {
    const mobileNavStyles = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "18px",
        borderBottom: "#F6F6F6 2px solid",
    }

    const [isMenuVisible, setIsMenuVisible] = useState(false)

    return (
        <div style={mobileNavStyles}>
            <div>
                <MenuIcon style={{ margin: "20px" }} onClick={() => setIsMenuVisible(!isMenuVisible)} />
            </div>
            <Drawer style={{ width: "100vw" }} size={"xs"} placement={"left"} open={isMenuVisible} onClose={() => setIsMenuVisible(false)}>
                <Drawer.Header>
                    <Drawer.Title>css dropshadow generator</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <PlaceholderParagraph rows={8} />
                </Drawer.Body>
            </Drawer>
        </div>
    );
}
