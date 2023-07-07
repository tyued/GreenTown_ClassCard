import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import css from './layout.module.scss';
import { connect } from "react-redux";

const Layout = memo(({ app }) => {
    return (
        <div className={css.Layout}>
					<div>{app.permission.join('/')}</div>
						{/* <Outlet /> */}
        </div>
    )}
);

const mapStateToProps = (state) => {
    const { app } = state;
    return { app }
}

export default connect(mapStateToProps)(Layout);



