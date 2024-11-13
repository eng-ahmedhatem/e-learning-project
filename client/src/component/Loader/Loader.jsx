import { memo } from "react";
import "./loader.css";
function Loader() {
  return <div className="loader_content absolute flex flex-col justify-center items-center top-0 right-0">
    <div className="loader">
        </div>
  </div>
}
export default memo(Loader);
