import CreatePost from "./CreatePost";
import Home from "./Home";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";
import Search from "./Search";
// import Toggle from "./Toggle";

const SidebarItems = () => {
	return (
		<>
			<Home />
			<Search />
			<Notifications />
			<CreatePost />
			{/* <Toggle /> */}
			<ProfileLink />
			
		</>
	);
};

export default SidebarItems;