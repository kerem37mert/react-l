import React, {ReactNode} from "react";

// Style
import "./PageContainer.style.css";

interface PageContainerProps {
    children?: ReactNode
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
    return(
        <div className="page-container">
            {children}
        </div>
    );
}

export default PageContainer;
