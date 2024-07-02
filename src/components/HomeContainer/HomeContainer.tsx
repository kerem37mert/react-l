import React, {ReactNode} from "react";

// Style
import "./HomeContainer.style.css";

interface PageContainerProps {
    children?: ReactNode
}

const HomeContainer: React.FC<PageContainerProps> = ({ children }) => {
    return(
        <div className="page-container">
            {children}
        </div>
    );
}

export default HomeContainer;
