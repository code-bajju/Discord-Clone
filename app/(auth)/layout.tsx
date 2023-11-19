import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
    <div className="h-full m-20 flex item-center justify-center">
        {children}
    </div>
    );
}

export default AuthLayout;