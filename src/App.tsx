import { AppWrapper } from "./modules/app/components/AppWrapper"
import { Layout } from "./modules/app/components/Layout"
import { TeamPage } from "./modules/game/components/pages/TeamPage"

function App() {
	return (
		<AppWrapper>
			<Layout>
				<TeamPage />
			</Layout>
		</AppWrapper>
	)
}

export default App
