import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    HomeIcon,
    UserIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon
} from "@heroicons/react/outline";

const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row m-4 justify-between
        items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title='HOME' Icon={HomeIcon}/>
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
                <HeaderItem title='SEARCH' Icon={SearchIcon}/>
                <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
            </div>
            <Image
                className="object-contain"
                src='https://links.papareact.com/ua6'
                width={100}
                height={50}
                alt=""
            />
        </header>
    );
};

export default Header;