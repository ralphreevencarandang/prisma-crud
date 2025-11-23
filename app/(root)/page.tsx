
import Signup from "../component/Signup";
import Signin from "../component/Signin";
import {prisma} from '../lib/prisma'
export default async  function Home() {




  return (
    <div className="max-container padding-x padding-y flex justify-center items-center" >
      <Signup/>
      {/* <Signin/> */}

    </div>
  );
}

