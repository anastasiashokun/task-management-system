import { createBrowserRouter, Navigate} from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ContactsPage from "../../pages/ContactsPage";
import InstructionPage from "../../pages/InstructionPage";
import DailyPage from "../../pages/DailyPage";
import Layout from "../../components/layout/layout";
import Routes from "./routes.enum";


const useRouter = () => {
  return createBrowserRouter([
    {
      path: Routes.Home,
      element: <Layout />, 
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: Routes.DailyPage,
          element: <DailyPage />
        },
        {
          path: Routes.InstructionPage,
          element: <InstructionPage />
        },
        {
          path: Routes.ContactsPage,
          element: <ContactsPage />
        },
        {
          path: '*',
          element: <Navigate to={Routes.Home} />
        }
      ]
    },
 
  ])
}

export default useRouter