import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverviewProjectPage from "./pages/overviewProjectPage";
import SingleProjectPage from "./pages/singleProjectPage";
import ErrorPage from "./pages/errorPage"

import projectList from "./components/projectList.json"


function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/portfolio-mk5" errorElement={<ErrorPage />}>
						<Route index element={
							<OverviewProjectPage
								projectList={projectList}
							/>
						} />
						<Route path="/portfolio-mk5/project/:projectName" element={
							<SingleProjectPage
								projectList={projectList}
							/>
						} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;