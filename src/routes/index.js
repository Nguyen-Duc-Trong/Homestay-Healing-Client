
import HomePage from "../pages/HomePage/HomePage.tsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.tsx";
import LoginPage from "../pages/LoginPage/LoginPage.tsx";
import PersonalPage from "../pages/PersonalPage/PersonalPage.tsx";
import RentingRoom from '../pages/RentingRoom/RentingRoom.tsx'
import RentalHouse from '../pages/RentalHouse/RentalHouse.tsx'
import ApartmentRental from '../pages/ApartmentRental/ApartmentRental.tsx'
import ServiceSense from '../pages/ServiceSense/ServiceSense.tsx'
import DetailPost from "../pages/DetailPost/DetailPost.tsx";
import Contract from "../pages/Contract/Contract.tsx";
import BookRoomPage from "../pages/BookRoomPage/BookRoomPage.tsx";

export const routes =  [
    {
        path : "/",
        page : HomePage,
        isShowHeader : true,
        isShowFooter : true,
        isShowSearch: true,
        isShowProminentArea: true
    },
    {
        path : "/BookRoom",
        page : BookRoomPage,
        isShowHeader : true,
        isShowFooter : true,
        isShowSearch: false,
        isShowProminentArea: false
    },
    {
        path : "/login",
        page : LoginPage,
        isShowHeader : true,
        isShowFooter : true,
        isShowSearch: false,
        isShowProminentArea: false
    },
    {
        path : "/rentingroom",
        page : RentingRoom,
        isShowHeader : true,
        isShowFooter : true,
        isShowSearch: true,
        isShowProminentArea: true
    },
    {
        path : "/rentalhouse",
        page : RentalHouse,
        isShowHeader : true,
        isShowFooter : true,
        isShowSearch: true,
        isShowProminentArea: true
    },
    {
        path : "/apartmentRental",
        page : ApartmentRental,
        isShowHeader : true,
        isShowFooter : true,
        isShowSearch: true,
        isShowProminentArea:true
    },
    {
        path : "/contract",
        page : Contract,
        isShowHeader : true,
        isShowFooter : true,
        isShowSearch: false
    },
    {
        path : "/serviceSense",
        page : ServiceSense,
        isShowHeader : true,
        isShowFooter : true,
        isShowSearch: false,
        isShowProminentArea: false
    },
    {
        path : "*",
        page : NotFoundPage,
    },
    {
        path : "/personal",
        page : PersonalPage,
    },
    {
        path : "chi-tiet/:title/:postId",
        page : DetailPost,
        isShowHeader : true,
        isShowFooter : true,
        isShowSearch: false,
        isShowProminentArea: false
    },
]
