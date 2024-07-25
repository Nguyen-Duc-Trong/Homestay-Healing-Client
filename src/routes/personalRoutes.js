import ManagePostings from "../pages/PersonalPage/components/ManagePostings.tsx"
import EditPersonal from "../pages/PersonalPage/components/EditPersonal.tsx"
import Information from "../pages/PersonalPage/components/Information.tsx"
import DepositHistory from "../pages/PersonalPage/components/DepositHistory.tsx"
import DepositMoney from "../pages/PersonalPage/components/DepositMoney.tsx"
import PaymentHistory from "../pages/PersonalPage/components/PaymentHistory.tsx"
import ServicePriceList from "../pages/PersonalPage/components/ServicePriceList.tsx"
import Contact from "../pages/PersonalPage/components/Contact.tsx"
import Transfer from "../pages/PersonalPage/DepositMoney/Transfer.tsx"
import Posting from "../pages/PersonalPage/Posting/Posting.tsx"
export const personalRoutes =  [
    {
        path : "/personal/ManagePostings",
        PageChild : ManagePostings,
    },
    {
        path : "/personal/EditPersonal",
        PageChild : EditPersonal,
    },
    {
        path : "/personal/Information",
        PageChild : Information,
    },
    {
        path : "/personal/DepositHistory",
        PageChild : DepositHistory,
    },
    {
        path : "/personal/DepositMoney",
        PageChild : DepositMoney,
    },
    {
        path : "/personal/PaymentHistory",
        PageChild : PaymentHistory,
    },
    {
        path : "/personal/ServicePriceList",
        PageChild : ServicePriceList,
    },
    {
        path : "/personal/Contact",
        PageChild : Contact,
    },
    {
        path : "/personal/DepositMoney/transfer",
        PageChild : Transfer,
    },
    {
        path : "/personal/DepositMoney/posting",
        PageChild : Posting,
    },
]