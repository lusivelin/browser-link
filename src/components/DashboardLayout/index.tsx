import { useState } from "react"
import Card from "../../elements/Card"
import { Logo } from "../../elements/Icons"
import { col, row } from "../../styles/grid"
import { collapseButton, contentWrapper, logoItem, menuItem, menuList, sideBarWrapper, topHeaderWrapper } from "./style"

const DashboardLayout = () => {
    const [collapse, setcollapse] = useState(false)
    return (
        <section>
            <aside className={sideBarWrapper({ collapse })}>
                <ul className={menuList()}>
                    <li className={logoItem()}>
                        <Logo />
                    </li>

                    <li className={menuItem({ active: true })}>
                        Components
                    </li>
                    <li className={menuItem()}>
                        Elements
                    </li>
                </ul>
                <button onClick={() => setcollapse(!collapse)} className={collapseButton()}>Left</button>
            </aside>
            <nav className={topHeaderWrapper({ collapse })}>
                Components Here
            </nav>
            <main className={contentWrapper({ collapse })}>
                <div className={row({})}>

                    <div className={col({ xs: 12, md: 8 })}>
                        <Card/>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default DashboardLayout