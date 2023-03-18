import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import Toc from "../Toc/Toc";
import './Mainwrapper.css'

const Mainwrapper  = () => {
    return <div id='mainwrapper'>
        <Sidebar />
        <Main />
        <Toc />
    </div>
}

export default Mainwrapper