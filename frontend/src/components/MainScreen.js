import React from "react";

function MainScreen({ children, title }) {
  return (
    <div className="mainback">
      <div>
        <div>
          <div className="page">
            {title && (
              <>
                <h1 className="heading">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
