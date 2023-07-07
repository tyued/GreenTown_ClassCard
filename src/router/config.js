import Layout from "../layout"
import Dashboard from "../pages/dashboard"

const Menu = [
	{
		path: '/',
		title: '首页',
		element: <Layout />,
		children: [
			{
				path: '/',
				title: 'dashboard',
				element: <Dashboard />
			}
		]
	}
]

export default Menu